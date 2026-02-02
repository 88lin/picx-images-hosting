const resultState = {
        answers: {},
        animalResult: null,
        isLoading: true,
        error: null,
        historyId: null,   
        createdAt: null    
      };
      const PENDING_HISTORY_FLAG = 'quizPendingHistory';
      const elements = {
        loading: document.getElementById('loading'),
        error: document.getElementById('error'),
        resultContent: document.getElementById('result-content'),
        animalEmoji: document.getElementById('animal-emoji'),
        animalName: document.getElementById('animal-name'),
        animalType: document.getElementById('animal-type'),
        animalDescription: document.getElementById('animal-description'),
        dimensionsGrid: document.getElementById('dimensions-grid'),
        featureCombination: document.getElementById('feature-combination'),
        animalArchetype: document.getElementById('animal-archetype')
      };
      const urlParams = new URLSearchParams(window.location.search);
      const historyIdFromUrl = urlParams.get('historyId');
      if (historyIdFromUrl) {
        resultState.historyId = historyIdFromUrl;
      }
      const FALLBACK_ANIMALS = [
        {"id":"dog","name":"狗","emoji":"🐶","dims":{"DOM":1,"STR":1,"COM":5,"SOL":0,"AGI":3,"SEC":4,"AES":1}},
        {"id":"cat","name":"猫","emoji":"🐱","dims":{"DOM":1,"STR":2,"COM":0,"SOL":5,"AGI":4,"SEC":2,"AES":3}},
        {"id":"wolf","name":"狼","emoji":"🐺","dims":{"DOM":4,"STR":4,"COM":3,"SOL":2,"AGI":2,"SEC":1,"AES":0}},
        {"id":"fox","name":"狐","emoji":"🦊","dims":{"DOM":1,"STR":5,"COM":0,"SOL":4,"AGI":4,"SEC":1,"AES":1}},
        {"id":"lion","name":"狮","emoji":"🦁","dims":{"DOM":5,"STR":2,"COM":3,"SOL":3,"AGI":1,"SEC":2,"AES":2}},
        {"id":"bear","name":"熊","emoji":"🐻","dims":{"DOM":3,"STR":1,"COM":1,"SOL":4,"AGI":0,"SEC":5,"AES":1}},
        {"id":"rabbit","name":"兔","emoji":"🐰","dims":{"DOM":0,"STR":1,"COM":2,"SOL":2,"AGI":5,"SEC":5,"AES":2}},
        {"id":"hamster","name":"仓鼠","emoji":"🐹","dims":{"DOM":0,"STR":0,"COM":2,"SOL":4,"AGI":1,"SEC":5,"AES":1}},
        {"id":"swan","name":"天鹅","emoji":"🦢","dims":{"DOM":2,"STR":1,"COM":2,"SOL":3,"AGI":1,"SEC":2,"AES":5}},
        {"id":"deer","name":"鹿","emoji":"🦌","dims":{"DOM":1,"STR":1,"COM":3,"SOL":3,"AGI":3,"SEC":4,"AES":4}},
        {"id":"eagle","name":"鹰","emoji":"🦅","dims":{"DOM":4,"STR":3,"COM":0,"SOL":5,"AGI":2,"SEC":1,"AES":2}},
        {"id":"crow","name":"乌鸦","emoji":"🐦‍⬛","dims":{"DOM":2,"STR":5,"COM":4,"SOL":2,"AGI":3,"SEC":1,"AES":0}},
        {"id":"capybara","name":"水豚","emoji":"🦫","dims":{"DOM":0,"STR":0,"COM":5,"SOL":2,"AGI":1,"SEC":5,"AES":2}},
        {"id":"whale","name":"鲸","emoji":"🐋","dims":{"DOM":2,"STR":3,"COM":4,"SOL":4,"AGI":0,"SEC":2,"AES":4}},
        {"id":"parrot","name":"鹦鹉","emoji":"🦜","dims":{"DOM":1,"STR":2,"COM":5,"SOL":1,"AGI":5,"SEC":1,"AES":2}},
        {"id":"octopus","name":"章鱼","emoji":"🐙","dims":{"DOM":2,"STR":5,"COM":0,"SOL":5,"AGI":4,"SEC":1,"AES":1}},
        {"id":"shark","name":"鲨鱼","emoji":"🦈","dims":{"DOM":5,"STR":3,"COM":0,"SOL":5,"AGI":3,"SEC":0,"AES":0}},
        {"id":"dolphin","name":"海豚","emoji":"🐬","dims":{"DOM":3,"STR":4,"COM":5,"SOL":0,"AGI":4,"SEC":1,"AES":1}},
        {"id":"raccoon","name":"浣熊","emoji":"🦝","dims":{"DOM":1,"STR":4,"COM":2,"SOL":3,"AGI":5,"SEC":2,"AES":0}},
        {"id":"meerkat","name":"猫鼬","emoji":"🦡","dims":{"DOM":2,"STR":3,"COM":5,"SOL":1,"AGI":3,"SEC":5,"AES":0}}
      ];
      async function loadAndCalculateResult() {
        try {
          if (resultState.historyId) {
            const historyRaw = localStorage.getItem('quizHistory');
            if (!historyRaw) {
              throw new Error('No history found');
            }
            const historyList = JSON.parse(historyRaw);
            const target = historyList.find(item => item.id === resultState.historyId);
            if (!target) {
              throw new Error('History item not found');
            }
            resultState.answers = target.answers || {};
            resultState.createdAt = target.createdAt || null;
          } else {
            const storedAnswers = localStorage.getItem('quizAnswers');
            if (!storedAnswers) {
              throw new Error('No answers found');
            }
            resultState.answers = JSON.parse(storedAnswers);
            resultState.createdAt = new Date().toISOString();
          }
          await window.loadChartJs();
          let animals = null;
          try {
            const response = await fetch('animals.json');
            if (response.ok) {
              animals = await response.json();
            } else {
              throw new Error('Failed to load animals data');
            }
          } catch (e) {
            console.warn('animals.json 加载失败，使用内置兜底数据:', e);
            animals = FALLBACK_ANIMALS;
          }
          calculateResult(animals);
          const hasPendingFlag =
            !resultState.historyId &&
            localStorage.getItem(PENDING_HISTORY_FLAG) === '1';
          if (hasPendingFlag) {
            addHistoryEntry();
            localStorage.removeItem(PENDING_HISTORY_FLAG);
          }
          resultState.isLoading = false;
          renderResult();
        } catch (error) {
          console.error('Error calculating result:', error);
          resultState.error = error;
          resultState.isLoading = false;
          renderError();
        }
      }
      const DIMENSION_KEYS = ['DOM', 'STR', 'COM', 'SOL', 'AGI', 'SEC', 'AES'];
      const SCORE_MAP = [
        { A: { AES: 2 }, B: { COM: 2 }, C: { SOL: 2 }, D: { AGI: 2 } },
        { A: { COM: 2 }, B: { SEC: 2 }, C: { AES: 2 }, D: { STR: 2 } },
        { A: { STR: 2 }, B: { COM: 2 }, C: { SEC: 2 }, D: { DOM: 2 } },
        { A: { STR: 2 }, B: { AGI: 2 }, C: { DOM: 2 }, D: { SOL: 2 } },
        { A: { SOL: 2 }, B: { AGI: 2 }, C: { DOM: 2 }, D: { SEC: 2 } },
        { A: { AES: 2 }, B: { DOM: 2 }, C: { STR: 2 }, D: { COM: 2 } },
        { A: { SOL: 2 }, B: { COM: 2 }, C: { SEC: 2 }, D: { AES: 2 } },
        { A: { SEC: 2 }, B: { COM: 2 }, C: { SOL: 2 }, D: { DOM: 2 } },
        { A: { COM: 2 }, B: { SEC: 2 }, C: { STR: 2 }, D: { AGI: 2 } },
        { A: { DOM: 2 }, B: { STR: 2 }, C: { AES: 2 }, D: { SEC: 2 } },
        { A: { STR: 2 }, B: { AES: 2 }, C: { DOM: 2 }, D: { AES: 2 } },
        { A: { AES: 2 }, B: { DOM: 2 }, C: { SOL: 2 }, D: { SEC: 2 } },
        { A: { AES: 2 }, B: { DOM: 2 }, C: { AES: 2 }, D: { SOL: 2 } },
        { A: { AES: 2 }, B: { COM: 2 }, C: { STR: 2 }, D: { SEC: 2 } },
        { A: { SOL: 2 }, B: { STR: 2 }, C: { COM: 2 }, D: { AGI: 2 } },
        { A: { DOM: 2 }, B: { COM: 2 }, C: { SOL: 2 }, D: { AGI: 2 } },
        { A: { DOM: 2 }, B: { SEC: 2 }, C: { AGI: 2 }, D: { SOL: 2 } },
        { A: { STR: 2 }, B: { AGI: 2 }, C: { SOL: 2 }, D: { DOM: 2 } },
        { A: { STR: 2 }, B: { DOM: 2 }, C: { COM: 2 }, D: { SOL: 2 } },
        { A: { SOL: 2 }, B: { DOM: 2 }, C: { AES: 2 }, D: { COM: 2 } },
        { A: { SOL: 2 }, B: { DOM: 2 }, C: { SEC: 2 }, D: { COM: 2 } },
        { A: { DOM: 2 }, B: { SOL: 2 }, C: { COM: 2 }, D: { STR: 2 } },
        { A: { AGI: 2 }, B: { COM: 2 }, C: { AES: 2 }, D: { SOL: 2 } },
        { A: { SEC: 2 }, B: { AGI: 2 }, C: { SOL: 2 }, D: { DOM: 2 } },
        { A: { AES: 2 }, B: { COM: 2 }, C: { SOL: 2 }, D: { DOM: 2 } },
        { A: { AES: 2 }, B: { COM: 2 }, C: { DOM: 2 }, D: { STR: 2 } },
        { A: { DOM: 2 }, B: { AGI: 2 }, C: { SEC: 2 }, D: { COM: 2 } },
        { A: { STR: 2 }, B: { COM: 2 }, C: { SEC: 2 }, D: { DOM: 2 } },
        { A: { SOL: 2 }, B: { COM: 2 }, C: { AES: 2 }, D: { DOM: 2 } },
        { A: { AES: 2 }, B: { COM: 2 }, C: { DOM: 2 }, D: { STR: 2 } },
        { A: { STR: 2 }, B: { DOM: 2 }, C: { AGI: 2 }, D: { COM: 2 } },
        { A: { SOL: 2 }, B: { COM: 2 }, C: { AGI: 2 }, D: { STR: 2 } },
        { A: { DOM: 2 }, B: { AES: 2 }, C: { AGI: 2 }, D: { STR: 2 } },
        { A: { DOM: 2 }, B: { COM: 2 }, C: { AGI: 2 }, D: { STR: 2 } },
        { A: { STR: 2 }, B: { COM: 2 }, C: { AGI: 2 }, D: { SEC: 2 } },
        { A: { DOM: 2 }, B: { AGI: 2 }, C: { SOL: 2 }, D: { SEC: 2 } },
        { A: { DOM: 2 }, B: { STR: 2 }, C: { SEC: 2 }, D: { AES: 2 } },
        { A: { SOL: 2 }, B: { DOM: 2 }, C: { COM: 2 }, D: { AES: 2 } },
        { A: { STR: 2 }, B: { COM: 2 }, C: { AES: 2 }, D: { DOM: 2 } },
        { A: { STR: 2 }, B: { SEC: 2 }, C: { AGI: 2 }, D: { DOM: 2 } },
        { A: { STR: 2 }, B: { DOM: 2 }, C: { SEC: 2 }, D: { AGI: 2 } },
        { A: { SOL: 2 }, B: { DOM: 2 }, C: { COM: 2 }, D: { STR: 2 } },
        { A: { STR: 2 }, B: { DOM: 2 }, C: { COM: 2 }, D: { AES: 2 } },
        { A: { DOM: 2 }, B: { SEC: 2 }, C: { AES: 2 }, D: { SOL: 2 } },
        { A: { DOM: 2 }, B: { STR: 2 }, C: { COM: 2 }, D: { AGI: 2 } },
        { A: { DOM: 2 }, B: { AES: 2 }, C: { STR: 2 }, D: { SOL: 2 } },
        { A: { DOM: 2 }, B: { COM: 2 }, C: { SEC: 2 }, D: { AGI: 2 } },
        { A: { STR: 2 }, B: { COM: 2 }, C: { SEC: 2 }, D: { DOM: 2 } },
        { A: { AES: 2 }, B: { DOM: 2 }, C: { SEC: 2 }, D: { SOL: 2 } },
        { A: { STR: 2 }, B: { AES: 2 }, C: { COM: 2 }, D: { SOL: 2 } },
        { A: { DOM: 2 }, B: { AES: 2 }, C: { COM: 2 }, D: { SEC: 2 } },
        { A: { AGI: 2 }, B: { COM: 2 }, C: { SEC: 2 }, D: { STR: 2 } },
        { A: { STR: 2 }, B: { DOM: 2 }, C: { AES: 2 }, D: { COM: 2 } },
        { A: { STR: 2 }, B: { COM: 2 }, C: { SEC: 2 }, D: { DOM: 2 } },
        { A: { AGI: 2 }, B: { COM: 2 }, C: { SEC: 2 }, D: { DOM: 2 } },
        { A: { SOL: 2 }, B: { COM: 2 }, C: { SEC: 2 }, D: { AES: 2 } },
        { A: { STR: 2 }, B: { COM: 2 }, C: { AGI: 2 }, D: { SOL: 2 } },
        { A: { AGI: 2 }, B: { DOM: 2 }, C: { STR: 2 }, D: { AES: 2 } },
        { A: { STR: 2 }, B: { COM: 2 }, C: { SEC: 2 }, D: { SOL: 2 } },
        { A: { AES: 2 }, B: { COM: 2 }, C: { SEC: 2 }, D: { DOM: 2 } }
    ];
      const MAX_PER_DIM = {};
      DIMENSION_KEYS.forEach(k => { MAX_PER_DIM[k] = 0; });
      SCORE_MAP.forEach((row) => {
        const bestThisQuestion = {};
        DIMENSION_KEYS.forEach(k => { bestThisQuestion[k] = 0; });
        ['A', 'B', 'C', 'D'].forEach((opt) => {
          const m = row[opt];
          if (!m) return;
          Object.keys(m).forEach((dim) => {
            const val = m[dim] || 0;
            if (val > bestThisQuestion[dim]) {
              bestThisQuestion[dim] = val;
            }
          });
        });
        DIMENSION_KEYS.forEach((dim) => {
          MAX_PER_DIM[dim] += bestThisQuestion[dim];
        });
      });
      function calculateResult(animals) {
      const { ratios, display } = calculateDimensionScores(resultState.answers);
      const match = window.Scoring.nearestAnimal(ratios, animals);
      match.tScores = display;
      resultState.animalResult = match;
    }
      function calculateDimensionScores(answers) {
        const raw = {};
        DIMENSION_KEYS.forEach(dim => {
          raw[dim] = 0;
        });
        Object.entries(answers || {}).forEach(([rawQid, answer]) => {
          if (!answer) return;
          const qid = String(rawQid).replace(/^Q/i, '');
          const index = Number(qid) - 1;
          if (!Number.isFinite(index) || index < 0 || index >= SCORE_MAP.length) {
            return;
          }
          const mapRow = SCORE_MAP[index];
          if (!mapRow) return;
          const questionScores = mapRow[answer];
          if (!questionScores) return;
          DIMENSION_KEYS.forEach(dim => {
            raw[dim] += (questionScores[dim] || 0);
          });
        });
        const ratios = {};
        DIMENSION_KEYS.forEach(dim => {
          const cap = MAX_PER_DIM[dim] || 1;
          let r = raw[dim] / cap;
          if (r < 0) r = 0;
          if (r > 1) r = 1;
          ratios[dim] = r;
        });
        const vals = Object.values(ratios);
        const min = Math.min(...vals);
        const max = Math.max(...vals);
        const span = (max - min) || 1;
        const display = {};
        DIMENSION_KEYS.forEach(dim => {
          const rel = (ratios[dim] - min) / span;
          display[dim] = Math.round(20 + rel * 60);
        });
        return { raw, ratios, display };
      }
      function getAnimalTypeByName(name) {
        const animalTypes = {
          '狗': '忠诚陪伴型',
          '猫': '独立优雅型',
          '狼': '领袖战略型',
          '狐': '机敏智取型',
          '狮': '王者自信型',
          '熊': '沉稳守护型',
          '兔': '温柔敏感型',
          '仓鼠': '可爱储蓄型',
          '天鹅': '优雅浪漫型',
          '鹿': '温和文艺型',
          '鹰': '高远专注型',
          '乌鸦': '神秘理智型',
          '水豚': '社交治愈型',
          '鲸': '深度思考型',
          '鹦鹉': '表达沟通型',
          '章鱼': '创意智谋型',
          '鲨鱼': '目标进攻型',
          '海豚': '友好乐观型',
          '浣熊': '灵巧探索型',
          '猫鼬': '警觉协作型'
        };
        return animalTypes[name] || '个性探索型';
      }
      function addHistoryEntry() {
        try {
          const historyRaw = localStorage.getItem('quizHistory');
          const historyList = historyRaw ? JSON.parse(historyRaw) : [];
          const { best, type, tScores } = resultState.animalResult || {};
          if (!best || !tScores) return;
          const entry = {
            id: Date.now().toString(),
            createdAt: resultState.createdAt || new Date().toISOString(),
            animalId: best.id || '',
            animalName: best.name || '',
            animalEmoji: best.emoji || '🐾',
            animalType: getAnimalTypeByName(best.name),
            typeCombined: type || best.name || '',
            tScores: tScores,
            answers: resultState.answers || {}
          };
          historyList.unshift(entry);
          if (historyList.length > 30) {
            historyList.length = 30;
          }
          localStorage.setItem('quizHistory', JSON.stringify(historyList));
        } catch (e) {
          console.warn('保存历史记录失败:', e);
        }
      }
      function renderResult() {
        const { best, tScores } = resultState.animalResult;
        elements.animalEmoji.textContent = best.emoji;
        elements.animalName.textContent = best.name;
        const animalType = getAnimalTypeByName(best.name);
        elements.animalType.textContent = animalType;
        const animalDescriptions = {
          '狗': '你是忠诚的伙伴与热情的守护者。你的世界围绕着“我们”展开，无论是家人、朋友还是团队。你擅长建立连接，给予温暖，并在群体中找到自己的价值。你的快乐简单而纯粹，来源于陪伴与被需要。',
          '猫': '你是优雅的独立思想家，神秘且自我满足。你享受独处，拥有丰富的内心世界。你行动敏捷，好奇心强，但只对自己感兴趣的事物投入精力。你的魅力在于那份若即若离的疏离感和无法预测的灵动。',
          '狼': '你是天生的领袖与战略家，兼具力量与社群智慧。你既能独立思考，又能无缝地融入团队。你对目标执着，有强烈的责任感和领地意识，为了守护族群，你会展现出惊人的统御力和谋略。',
          '狐': '你是机敏的策略家与孤独的观察者。你拥有超凡的智慧和适应能力，擅长在复杂的环境中找到最优解。你倾向于独立行动，用敏锐的洞察力规避风险，达成目标。你的生存哲学是“智取”而非“强攻”。',
          '狮': '你是自信的王者，天生自带光环。你有强烈的统御欲和表现力，享受成为焦点的感觉。你慷慨、富有魅力，但有时也需要独处的空间来积蓄力量。你的存在本身就是一种宣告，充满力量与威严。',
          '熊': '你是沉稳的守护者，强大而内敛。你大部分时间安静、平和，享受自己的节奏，但当领地或家人受到威胁时，会爆发出无与伦比的力量。你重视安全感，喜欢为自己和亲近的人建立一个舒适、安全的庇护所。',
          '兔': '你是警觉的和平主义者，敏捷且富有同情心。你极度需要安全感，对环境变化非常敏感。你行动迅速，擅长躲避冲突。虽然有时会显得胆小，但你在熟悉和安全的小圈子里，会展现出活泼、温和的一面。',
          '仓鼠': '你是专注的囤积者与安逸的生活家。你最大的幸福来自于建立一个充满安全感的“小窝”。你喜欢收集和整理，无论是物质还是信息。你享受在自己的小世界里自得其乐，对外界的纷扰保持着一种可爱的迟钝。',
          '天鹅': '你是优雅的理想主义者，对美有着极致的追求。你姿态高贵，带有一种天生的距离感，但内心深处对伴侣和家庭极为忠诚。你的世界里，精神的契合与外在的和谐同样重要，绝不容忍粗俗与将就。',
          '鹿': '你是温和的自然之子，敏感而优雅。你对美和宁静有着天生的向往，常常沉浸在自己的精神世界里。你警惕性高，需要安全的环境才能放松。你的美在于那份不染尘埃的纯净和与自然融为一体的灵性。',
          '鹰': '你是高傲的远见者，拥有无与伦比的视野和决心。你习惯于从高处审视全局，制定长远的目标。你享受孤独，因为那能让你看得更清。你的力量不仅在于捕猎的利爪，更在于那份凌驾于一切之上的独立意志和宏大格局。',
          '乌鸦': '你是聪慧的谜题解决者与信息的传递者。你拥有极高的智商和好奇心，善于观察、学习和使用工具。你具有复杂的社会结构，擅长合作与沟通。在别人看来，你或许有些神秘甚至不祥，但这正是你智慧的保护色。',
          '水豚': '你是随和的社交大师，情绪稳定，万物皆可为友。你的存在本身就能给周围带来平静与和谐。你享受社群生活，但从不强求，用一种“佛系”的态度接纳一切。你的哲学是：放轻松，没什么大不了的。',
          '鲸': '你是深海的哲学家，古老而智慧。你承载着厚重的记忆，用深沉的歌声在广阔的社群中交流。你既能融入庞大的集体，又保持着个体的深邃孤独。你的内心像海洋一样，平静时包容万物，翻涌时充满力量。',
          '鹦鹉': '你是聪明的社交达人与天生的表演家。你热爱互动，擅长模仿和学习，是群体中的“开心果”和信息中心。你活泼好动，充满好奇心，总能给平淡的生活增添色彩和戏剧性。你的智慧体现在与他人的互动和交流中。',
          '章鱼': '你是深海的智者与伪装大师。你拥有惊人的智慧和解决问题的能力，身体的每一次变形都是一次策略的展现。你习惯于独立思考和行动，在复杂环境中展现出极强的适应性和创造力。你是真正的“多面手”。',
          '鲨鱼': '你是高效的目标追逐者，专注、直接、充满力量。你一旦锁定目标，便会心无旁骛地前进。你习惯独来独往，不需要复杂的社交关系。你的生存法则简单而纯粹：不断前进，永不停止。',
          '海豚': '你是智慧的嬉戏者与团队合作的典范。你拥有高度发达的大脑和复杂的社会行为，擅长通过合作解决问题。你充满玩乐精神，将生活视为一场有趣的游戏。你的快乐来源于与同伴的协作和探索世界的无穷乐趣。',
          '浣熊': '你是机灵的都市探险家，总能找到解决问题的“歪路子”。你好奇心极强，动手能力超群，为了达成目的可以不择手段（通常是为了吃的）。你非常灵活，总能在人类制定的规则中找到自己的生存空间。',
          '猫鼬': '你是警惕的哨兵与家庭的守护者。你对集体有着极强的归属感和责任心，时刻为家人的安全站岗放哨。你们的生存依赖于高效的团队协作和分工。你的勇敢不是为了个人，而是为了整个族群的安危。'
      };
        elements.animalType.textContent = getAnimalTypeByName(best.name);
        elements.animalDescription.textContent = animalDescriptions[best.name] || '你有独特的个性，无法被简单归类。你拥有多面的性格，能够在不同场合展现不同的一面，是一个复杂而有趣的人。';
        renderDimensions(tScores);
        renderRadarChart(tScores);
        renderFeatureCombinations(tScores);
        renderAnimalArchetype(best.name);
        elements.loading.style.display = 'none';
        elements.resultContent.style.display = 'block';
      }
      function renderDimensions(tScores) {
        const dimensionNames = {
          'DOM': '支配性',
          'STR': '力量感',
          'COM': '服从性',
          'SOL': '社交性',
          'AGI': '灵活性',
          'SEC': '安全感',
          'AES': '审美性'
        };
        const dimensionDescriptions = {
          'DOM': {
            'low': '你似乎习惯处于跟随者的位置，很少主动掌控局面。这种谦卑或许为你赢得了好人缘，但有时也可能让你失去展现自我的机会。你的内心是否也渴望过主导权？',
            'medium': '你对权力持平衡态度，既不盲目追求控制，也不轻易放弃发言权。你懂得在何时主动，何时退后，这种灵活让你在各种关系中游刃有余。你是否觉得这种平衡有时也意味着妥协？',
            'high': '你天生具有领导者气质，习惯掌控局面、做决定。你享受引领他人的感觉，这既是你的优势也是你的责任。你是否曾意识到，过度的掌控欲有时会让身边人感到压力？'
          },
          'STR': {
            'low': '你可能给人温和、内敛的印象，很少通过力量来解决问题。你的"力量"或许藏在其他地方——耐心、同理心或智慧。但有时候，展现坚韧也是一种保护自己的方式。',
            'medium': '你拥有适度的力量和韧性，既不会轻易被击倒，也不会过度强硬。你懂得在何时坚持，何时灵活调整。这种平衡的力量让你在面对挑战时既有原则又有弹性。',
            'high': '你是个意志坚强的人，面对困难有着惊人的韧性和毅力。你的坚持和执着往往能帮助你克服常人难以想象的障碍。但也要记住，偶尔的示弱和休息，并不代表软弱。'
          },
          'COM': {
            'low': '你有强烈的独立性和自我意识，很难完全服从他人的安排。你更相信自己的判断，这种特质让你与众不同，但有时也可能让你显得固执。你是否曾因为不愿妥协而错过一些机会？',
            'medium': '你能在坚持自我和配合他人之间找到平衡点。你尊重规则和权威，但也不会盲目服从。这种理性的态度让你既保持了个性，又能融入集体。',
            'high': '你是个善于配合、顾全大局的人。你懂得何时放下自我，为了更大的目标而协同努力。这种牺牲精神值得赞赏，但也请记得：你的需求和感受同样重要。'
          },
          'SOL': {
            'low': '你享受独处的时光，社交对你来说可能是一种消耗。你的世界丰富而深邃，不需要通过外界的认可来证明自己。但偶尔的真诚连接，或许能为你打开另一个精彩的世界。',
            'medium': '你在社交和独处之间找到了舒适的平衡点。你享受与人交往的乐趣，也珍视自己的私人空间。这种平衡让你既能从关系中获取能量，又能保持内心的独立与宁静。',
            'high': '你是天生的社交达人，在人群中如鱼得水。你通过与人连接获得能量和满足感，善于建立和维护关系。但在喧嚣之后，你是否也需要一些安静的时刻来审视真实的自己？'
          },
          'AGI': {
            'low': '你喜欢稳定和秩序，对变化保持谨慎态度。你的坚持和专注是你的优势，但有时也可能让你错过新的机会。世界唯一不变的就是变化，试着拥抱一些不确定性，或许能发现新的可能。',
            'medium': '你既能保持一定的稳定性，又具备适应变化的能力。面对生活的起伏，你能够灵活调整但不随波逐流。这种平衡让你既可靠又不乏创新精神。',
            'high': '你是个应变能力极强的人，能够迅速适应各种环境和变化。你的灵活和机智让你在复杂多变的情况下总能找到出路。但有时，停下来思考比不断调整更重要。'
          },
          'SEC': {
            'low': '你似乎对安全感的需求较低，甚至可能享受某种程度的冒险和不确定性。这种勇敢令人钦佩，但也请记得：建立一些稳定的基础，能让你飞得更高更远。',
            'medium': '你对安全感有适度的追求，既不会被恐惧束缚，也不会盲目冒险。你懂得在稳定和挑战之间找到平衡，这种心态让你既能享受生活的精彩，又不会失去内心的安宁。',
            'high': '安全感对你来说至关重要，你倾向于规避风险，追求稳定。这种谨慎让你的生活更加可控，但有时也可能限制你的成长。试着偶尔走出舒适区，你可能会发现自己比想象中更强大。'
          },
          'AES': {
            'low': '你可能更注重实用和效率，对美的追求相对低调。对你来说，事物的价值在于其功能而非形式。但生活不仅是生存，偶尔停下来欣赏美，能让心灵得到滋养。',
            'medium': '你能欣赏生活中的美好，但不会过分追求完美。你懂得在实用和美感之间找到平衡，这种态度让你的生活既充实又不失品味。',
            'high': '你对美有着敏锐的感知和不懈的追求。美不仅仅是外表，更是一种生活态度。你用独特的视角发现世界的美好，但也要小心：过度追求完美可能会让你错过生活中那些"不完美"的真实感动。'
          }
        };
        elements.dimensionsGrid.innerHTML = '';
        Object.entries(tScores).forEach(([dim, score]) => {
          const dimensionCard = document.createElement('div');
          dimensionCard.className = 'dimension-card';
          const percentage = Math.min(100, Math.max(0, score));
          let descriptionLevel;
          if (score < 40) {
            descriptionLevel = 'low';
          } else if (score > 70) {
            descriptionLevel = 'high';
          } else {
            descriptionLevel = 'medium';
          }
          var dimMap = dimensionDescriptions && dimensionDescriptions[dim];
          var description = (dimMap && dimMap[descriptionLevel]) || '你的这个特质有独特的表现。';
          dimensionCard.innerHTML = `
            <div class="dimension-name">${dimensionNames[dim] || dim}</div>
            <div class="dimension-value">${Math.round(score)}</div>
            <div class="dimension-bar">
              <div class="dimension-fill" style="width: ${percentage}%"></div>
            </div>
            <div class="dimension-description">${description}</div>
          `;
          elements.dimensionsGrid.appendChild(dimensionCard);
        });
      }
      function renderFeatureCombinations(tScores) {
        const dimensionNames = {
          'DOM': '支配性',
          'STR': '力量感',
          'COM': '服从性',
          'SOL': '社交性',
          'AGI': '灵活性',
          'SEC': '安全感',
          'AES': '审美性'
        };
        const combinationsContainer = document.querySelector('.combination-content');
        combinationsContainer.innerHTML = '';
        const dimensionPairs = [
          { pair: ['DOM', 'COM'], analysis: compareDominanceAndCompliance },
          { pair: ['SOL', 'SEC'], analysis: compareSociabilityAndSecurity },
          { pair: ['STR', 'AGI'], analysis: compareStrengthAndAgility }
        ];
        const contrasts = identifyContrastingFeatures(tScores, dimensionNames);
        const coreMotivations = analyzeCoreMotivations(tScores, dimensionNames);
        const contrastAnalysisSection = document.createElement('div');
        contrastAnalysisSection.className = 'analysis-section';
        contrastAnalysisSection.innerHTML = `<h4 class="analysis-subtitle">维度对比分析</h4>`;
        dimensionPairs.forEach(({ pair, analysis }) => {
          const [dim1, dim2] = pair;
          const analysisResult = analysis(tScores[dim1], tScores[dim2], dimensionNames[dim1], dimensionNames[dim2]);
          const contrastItem = document.createElement('div');
          contrastItem.className = 'contrast-item';
          contrastItem.innerHTML = `
            <p class="contrast-title">${dimensionNames[dim1]} vs ${dimensionNames[dim2]}</p>
            <p class="contrast-description">${analysisResult}</p>
          `;
          contrastAnalysisSection.appendChild(contrastItem);
        });
        combinationsContainer.appendChild(contrastAnalysisSection);
        if (contrasts.length > 0) {
          const contrastsSection = document.createElement('div');
          contrastsSection.className = 'analysis-section';
          contrastsSection.innerHTML = `<h4 class="analysis-subtitle">动物原型分析</h4>`;
          contrasts.forEach(contrast => {
            const contrastItem = document.createElement('div');
            contrastItem.className = 'contrast-item';
            contrastItem.innerHTML = `
              <p class="contrast-description">${contrast}</p>
            `;
            contrastsSection.appendChild(contrastItem);
          });
          combinationsContainer.appendChild(contrastsSection);
        }
        if (coreMotivations.length > 0) {
          const motivationsSection = document.createElement('div');
          motivationsSection.className = 'analysis-section';
          motivationsSection.innerHTML = `<h4 class="analysis-subtitle">核心动力分析</h4>`;
          coreMotivations.forEach((motivation, index) => {
            const motivationItem = document.createElement('div');
            motivationItem.className = 'motivation-item';
            motivationItem.innerHTML = `
              <p class="motivation-description">${motivation}</p>
            `;
            motivationsSection.appendChild(motivationItem);
          });
          combinationsContainer.appendChild(motivationsSection);
        }
      }
      function compareDominanceAndCompliance(domScore, comScore, domName, comName) {
        const difference = Math.abs(domScore - comScore);
        if (domScore > comScore + 20) {
          return `你的${domName}明显高于${comName}，你习惯掌控局面，喜欢自己做决定，可能在团队中扮演领导者角色。这种特质让你能够果断行动，但也可能需要注意倾听他人意见。`;
        } else if (comScore > domScore + 20) {
          return `你的${comName}明显高于${domName}，你更善于配合和协作，能够很好地融入团队。你尊重规则和权威，但也别忘了，有时候表达自己的想法同样重要。`;
        } else {
          return `你的${domName}和${comName}较为平衡，你既能在需要时展现领导力，又懂得适时配合。这种平衡让你在各种社交和工作场合都能灵活应对。`;
        }
      }
      function compareSociabilityAndSecurity(solScore, secScore, solName, secName) {
        if (solScore > 60 && secScore > 60) {
          return `你既享受社交的乐趣，又重视安全感，这使你能够在群体中建立稳定而深入的关系。你能够从社交中获得能量，同时也懂得保护自己的内心世界。`;
        } else if (solScore > 60 && secScore < 40) {
          return `你是个社交达人，但对安全感的需求较低，这让你充满冒险精神，愿意尝试新事物。你可能喜欢广交朋友，享受多样化的社交体验。`;
        } else if (solScore < 40 && secScore > 60) {
          return `你享受独处时光，同时非常重视安全感。你可能有几个非常亲密的朋友，更喜欢稳定、可预测的生活环境。`;
        } else {
          return `你的社交需求和安全需求较为平衡，能够根据情境灵活调整自己的行为。这种平衡让你既能享受独处的宁静，也能在需要时积极参与社交活动。`;
        }
      }
      function compareStrengthAndAgility(strScore, agiScore, strName, agiName) {
        if (strScore > agiScore + 15) {
          return `你展现出强大的意志力和韧性，但适应变化的能力相对较弱。你一旦确定目标就会坚持到底，这种坚持是你的优势，但也可以尝试培养一些灵活应变的能力。`;
        } else if (agiScore > strScore + 15) {
          return `你有着出色的适应能力和灵活性，但可能在长期坚持方面有所欠缺。你善于应对变化，能够快速调整自己，但有时候也需要培养更多的耐心和毅力。`;
        } else {
          return `你在坚持和灵活之间找到了很好的平衡。面对挑战时，你既有足够的韧性坚持下去，又能够根据情况灵活调整策略。这种平衡是解决复杂问题的关键。`;
        }
      }
      function identifyContrastingFeatures(tScores, dimensionNames) {
        const contrasts = [];
        const dimensionList = Object.entries(tScores);
        const sortedDimensions = [...dimensionList].sort(([,a], [,b]) => b - a);
        const highest = sortedDimensions[0];
        const lowest = sortedDimensions[sortedDimensions.length - 1];
        if (highest[1] - lowest[1] > 30) {
          contrasts.push(`你在${dimensionNames[highest[0]]}方面表现突出（得分：${Math.round(highest[1])}），但在${dimensionNames[lowest[0]]}方面相对薄弱（得分：${Math.round(lowest[1])}）。这正是你个性中最独特的部分，它既赋予你特殊的优势，也可能是你需要关注的成长领域。`);
        }
        dimensionList.forEach(([dim, score]) => {
          if (score > 80) {
            contrasts.push(`你在${dimensionNames[dim]}方面的得分极高（${Math.round(score)}），这已经成为你个性中非常鲜明的特征。这种特质为你带来独特的优势，但也要注意避免它可能带来的盲点。`);
          } else if (score < 20) {
            contrasts.push(`你在${dimensionNames[dim]}方面的表现非常低调（得分：${Math.round(score)}）。这可能是你有意的选择，也可能是你尚未充分发展的领域。适当关注这一特质，可能会为你打开新的可能性。`);
          }
        });
        return contrasts;
      }
      function analyzeCoreMotivations(tScores, dimensionNames) {
        const motivations = [];
        const dimensionList = Object.entries(tScores);
        const topDimensions = [...dimensionList]
          .sort(([,a], [,b]) => b - a)
          .slice(0, 2);
        const [top1, top2] = topDimensions;
        if (top1[0] === 'DOM') {
          motivations.push(`你的核心动力来自于对影响力和控制力的追求。你享受设定方向、做出决策的过程，在能够发挥领导力的环境中，你会感到最有活力和满足感。`);
        } else if (top1[0] === 'STR') {
          motivations.push(`你的核心动力来自于内在的坚韧和毅力。面对挑战和困难时，你不会轻易退缩，反而会被激发出更大的潜能。克服障碍、证明自己的能力是驱动你前进的重要因素。`);
        } else if (top1[0] === 'COM') {
          motivations.push(`你的核心动力来自于对和谐与合作的追求。你重视集体的力量，愿意为了更大的目标而付出努力。在团队合作中找到自己的位置，为团队贡献价值是你重要的满足来源。`);
        } else if (top1[0] === 'SOL') {
          motivations.push(`你的核心动力来自于与他人的连接和互动。你通过社交获取能量和灵感，建立有意义的人际关系对你来说至关重要。在人群中，你往往能够发挥出自己最大的潜力。`);
        } else if (top1[0] === 'AGI') {
          motivations.push(`你的核心动力来自于对新鲜感和变化的追求。你喜欢挑战自我，尝试新事物，在变化的环境中你能够保持活力和创造力。墨守成规会让你感到束缚。`);
        } else if (top1[0] === 'SEC') {
          motivations.push(`你的核心动力来自于对安全和稳定的追求。你喜欢在可控的环境中工作和生活，提前规划和充分准备能让你感到安心。当你感到安全时，才能够更好地发挥自己的能力。`);
        } else if (top1[0] === 'AES') {
          motivations.push(`你的核心动力来自于对美的追求和对品质的坚持。你对周围的环境和体验有着较高的要求，创造或欣赏美好的事物能够给你带来极大的满足感。`);
        }
        if (top1[1] - top2[1] < 20) {
          if (top2[0] === 'DOM' && top1[0] !== 'DOM') {
            motivations.push(`同时，你也有一定的领导倾向，希望在某些情境中能够影响他人、主导局面。这种特质与你的主要动力相辅相成，使你能够在不同场合灵活展现自己的能力。`);
          } else if (top2[0] === 'STR' && top1[0] !== 'STR') {
            motivations.push(`同时，你也展现出一定的坚韧和毅力，面对挑战时不会轻易放弃。这种内在的力量支持着你追求自己的目标，是你实现理想的重要保障。`);
          } else if (top2[0] === 'COM' && top1[0] !== 'COM') {
            motivations.push(`同时，你也具有良好的合作精神，能够根据需要调整自己以适应团队的要求。这种灵活性使你能够在不同的角色中都表现出色。`);
          } else if (top2[0] === 'SOL' && top1[0] !== 'SOL') {
            motivations.push(`同时，你也享受一定的社交活动，通过与人互动获取信息和灵感。这种平衡让你既能专注于自己的目标，又不会孤立于社会之外。`);
          } else if (top2[0] === 'AGI' && top1[0] !== 'AGI') {
            motivations.push(`同时，你也具有一定的适应能力，能够根据环境的变化调整自己的策略。这种灵活性使你能够在复杂多变的情况下保持竞争力。`);
          } else if (top2[0] === 'SEC' && top1[0] !== 'SEC') {
            motivations.push(`同时，你也需要一定的安全感和稳定性，这使你在追求新体验的同时，不会完全脱离现实。这种平衡让你的生活既充满挑战又不失秩序。`);
          } else if (top2[0] === 'AES' && top1[0] !== 'AES') {
            motivations.push(`同时，你也关注生活中的美好和品质，不会仅仅追求功利性的目标。这种追求让你的生活更加丰富和有意义，不仅仅是生存，更是生活。`);
          }
        }
        return motivations;
      }
      function renderAnimalArchetype(animalName) {
        const archetypeData = {
          '狗': {
            mythology: '在世界各地的神话中，狗常被视为守护者和忠实伙伴。在古埃及，阿努比斯神以胡狼头形象出现，守护亡灵；在希腊神话中，刻耳柏洛斯是冥界的三头看门犬；在中国传统文化中，狗象征忠诚和吉祥。',
            famousPeople: '代表人物包括亚伯拉罕·林肯（以忠诚和正直著称）、圣雄甘地（坚守真理和非暴力的精神像狗一样执着）、特蕾莎修女（对人类的无私奉献体现了极致的忠诚）。',
            ethology: '犬类是最早被人类驯化的动物之一，其成功在于高度的社交智能和对群体的忠诚。狗通过识别和回应人类情感建立深厚纽带，这种能力在进化中成为生存优势。它们的协作性和服从性使其成为理想的工作伙伴，在团队中能发挥稳定可靠的作用。'
          },
          '猫': {
            mythology: '猫在古埃及被尊为神圣动物，象征生育和守护的巴斯泰托女神以猫首人身形象出现；在北欧神话中，弗蕾亚女神的战车由猫牵引；在中世纪欧洲，猫曾因与巫术关联而遭受迫害，但在许多文化中，猫仍保持着神秘和独立的象征意义。',
            famousPeople: '代表人物包括弗里达·卡罗（独立特行的艺术家，像猫一样神秘而优雅）、阿尔伯特·爱因斯坦（喜欢独处思考，思维像猫一样敏捷跳跃）、艾米莉·狄金森（隐居诗人，内心世界丰富如猫）。',
            ethology: '猫的捕猎能力和高度独立性使其成为优秀的生存者。它们保持着半驯化状态，保留着强烈的自我意识和领地观念。猫的感官敏锐，反应迅速，善于在复杂环境中导航。这种独立性和适应力使它们能够在各种条件下生存，同时保持自己的尊严和个性。'
          },
          '狼': {
            mythology: '在许多原住民文化中，狼被视为智慧和力量的象征；在北欧神话中，芬里尔狼是强大的预言生物；在美洲原住民传说中，狼常作为导师和守护者出现；在中国传统文化中，狼有时被描绘为狡猾和残忍的象征，但也代表着团队精神。',
            famousPeople: '代表人物包括亚历山大大帝（卓越的军事领袖，如狼般的战略思维）、拿破仑·波拿巴（具有非凡的领导魅力和战略眼光）、史蒂夫·乔布斯（创新领域的领袖，团队建设能力强）。',
            ethology: '狼群具有严格的社会结构和等级制度，由alpha狼领导。它们的协作狩猎策略展示了高度的智商和团队精神。狼的耐力和毅力使其能够在极端环境中生存。它们通过复杂的沟通系统维护群体和谐，这种社会性和协作能力是其生存的关键优势。'
          },
          '狐': {
            mythology: '在中国神话中，狐狸常被描绘为具有变形能力的灵物，如九尾狐；在日本传说中，狐仙（狐妖）既有善也有恶的形象；在西方文化中，狐狸通常被视为狡猾和机智的象征，如伊索寓言中的狐狸。',
            famousPeople: '代表人物包括孙子（《孙子兵法》体现了狐狸般的战略智慧）、达芬奇（多才多艺，思维敏捷）、玛丽·居里（在科学领域展现出非凡的洞察力和解决问题的能力）。',
            ethology: '狐狸是适应性极强的动物，能够在各种环境中生存。它们的捕猎策略结合了耐心等待和灵活应变，常利用智慧而非力量获取食物。狐狸的好奇心和探索精神使其能够发现新的资源和机会。这种机智和适应性是其在竞争激烈的自然环境中生存的关键。'
          },
          '狮': {
            mythology: '在古埃及，狮子象征王权和保护，狮身人面像斯芬克斯是智慧的象征；在希腊神话中，尼米亚狮子是赫拉克勒斯的第一个任务；在非洲许多文化中，狮子被视为力量和勇气的化身，常与王权联系在一起。',
            famousPeople: '代表人物包括马丁·路德·金（具有非凡的演讲魅力和领袖气质）、温斯顿·丘吉尔（在危机中展现出狮子般的勇气和决心）、麦当娜（舞台上的王者风范）。',
            ethology: '狮子是唯一一种群居的猫科动物，狮群通常由一头雄狮领导。雄狮的威严和力量使其能够保护领地和族群。狮子的自信和存在感使其在草原生态系统中处于顶端位置。它们的耐心和爆发力在捕猎中展现出完美结合，这种王者风范使其成为非洲草原上最具标志性的动物。'
          },
          '熊': {
            mythology: '在北美原住民文化中，熊被视为力量和治愈的象征；在北欧神话中，雷神索尔的守护动物是熊；在中国传统文化中，熊象征着力量和勇气；在许多文化中，熊也与冬眠和重生的概念相关联。',
            famousPeople: '代表人物包括乔治·华盛顿（美国第一任总统，稳重而有力量）、列夫·托尔斯泰（文学巨擘，思想深邃如熊）、安吉丽娜·朱莉（展现出熊般的母性本能和保护欲）。',
            ethology: '熊是力量与耐力的象征，能够在各种气候条件下生存。它们的杂食性使其食物来源广泛，增强了适应能力。熊的冬眠行为展示了其生理适应性和资源管理能力。虽然平时温和，但在保护幼崽或领地时会爆发出惊人的力量。这种平时沉稳、必要时强大的特质使其成为成功的生存者。'
          },
          '兔': {
            mythology: '在中国传统文化中，兔子与月亮和长生不老联系在一起，月兔捣药的传说广为流传；在西方文化中，复活节兔子象征着春天和新生命；在许多神话中，兔子因其繁殖能力而成为生命力的象征。',
            famousPeople: '代表人物包括甘地（看似温和却有着坚韧的内心）、艾米莉·勃朗特（外表柔弱但内心强大的作家）、玛丽莲·梦露（看似脆弱却有着惊人的适应能力）。',
            ethology: '兔子是典型的被捕食者，但它们通过多种策略确保生存：敏锐的听觉和视觉使其能够及早发现危险；快速的繁殖能力保证了种群延续；昼伏夜出的习性减少了被捕食的风险；群体生活提供了额外的安全保障。兔子的警惕性和适应力使其成为看似脆弱实则顽强的生存者。'
          },
          '仓鼠': {
            mythology: '仓鼠在神话传说中出现较少，但在现代文化中常被视为勤劳和满足的象征。它们储存食物的习性使其成为准备和规划的象征。在一些文化中，仓鼠也代表着简单生活的智慧。',
            famousPeople: '代表人物包括爱迪生（不断积累知识和经验，像仓鼠储存食物一样）、居里夫人（专注于自己的研究领域，不为外界干扰所动）、比尔·盖茨（善于积累资源并有效利用）。',
            ethology: '仓鼠是独居动物，具有强烈的领地意识。它们的颊囊设计允许储存大量食物，这种适应性特征使其能够在食物稀缺时期生存。仓鼠的建巢行为展示了其对安全环境的重视。它们的勤奋和准备意识是其在自然环境中生存的关键优势。'
          },
          '天鹅': {
            mythology: '在希腊神话中，天鹅与阿波罗和缪斯女神相关联，象征着音乐和诗歌；在北欧神话中，天鹅被视为灵魂的载体；在许多文化中，天鹅象征着优雅、美丽和忠诚，因为它们通常终身伴侣。',
            famousPeople: '代表人物包括奥黛丽·赫本（优雅的典范）、莫扎特（音乐天赋如天鹅般超凡）、弗里德里希·尼采（哲学思想如同天鹅之歌般深邃）。',
            ethology: '天鹅是水禽中体型最大的物种之一，以其优美的姿态和终身伴侣制闻名。它们在繁殖季节表现出强烈的领地意识和保护行为。天鹅的飞行能力展示了其力量与优雅的结合。幼天鹅从灰色丑小鸭到白色天鹅的转变成为了蜕变和成长的象征。这种内外兼修的特质使其成为自然界中最受尊敬的鸟类之一。'
          },
          '鹿': {
            mythology: '在凯尔特神话中，鹿是森林之神的化身，象征着敏捷和神秘；在基督教艺术中，鹿常与灵魂追求联系在一起；在中国传统文化中，鹿象征着长寿和吉祥；在许多文化中，鹿被视为连接自然与超自然世界的使者。',
            famousPeople: '代表人物包括林黛玉（《红楼梦》中的角色，敏感而优雅如鹿）、弗里德里希·席勒（德国诗人，作品充满理想主义色彩）、索菲亚·科波拉（导演，作品风格细腻优雅）。',
            ethology: '鹿的生存策略主要依赖于敏锐的感官和快速的反应。它们的大耳朵能够捕捉到最细微的声音，分叉的角不仅用于防御，也是健康和基因质量的标志。鹿群的社会结构虽然松散，但成员间保持着联系。它们对环境变化的敏感性使它们成为生态系统健康的指示物种。这种敏感与优雅的结合是鹿类最显著的特征。'
          },
          '鹰': {
            mythology: '在古埃及，鹰神荷鲁斯是王权和保护的象征；在希腊神话中，鹰是宙斯的使者；在美国文化中，白头鹰是国家的象征，代表自由和力量；在许多文化中，鹰被视为连接天地的桥梁，象征着远见和精神力量。',
            famousPeople: '代表人物包括拿破仑（具有鹰一样的战略眼光）、玛格丽特·撒切尔（被誉为"铁娘子"，展现出鹰般的果断）、尼尔·阿姆斯特朗（第一位登上月球的人，展现了鹰般的勇气和远见）。',
            ethology: '鹰是天空中的顶级捕食者，拥有卓越的视力和飞行能力。它们能够从数千米高空发现地面上的小猎物，这种远见是其生存的关键优势。鹰的爪子和喙强大有力，使其能够捕捉和处理大型猎物。一些鹰类展现出惊人的筑巢能力，建造巨大的巢穴。这种力量、远见和独立性使鹰成为力量和自由的象征。'
          },
          '乌鸦': {
            mythology: '在北欧神话中，奥丁神的两只乌鸦代表思想和记忆；在许多文化中，乌鸦被视为死亡和预言的使者；在中国传统文化中，乌鸦有时被视为吉祥之鸟，"乌鸦反哺"象征孝顺；在一些美洲原住民文化中，乌鸦是创世者和恶作剧之神。',
            famousPeople: '代表人物包括埃德加·爱伦·坡（神秘而富有才华的作家，乌鸦是其作品中的重要象征）、爱因斯坦（像乌鸦一样善于观察和思考）、居里夫人（在科学领域展现出乌鸦般的智慧和探索精神）。',
            ethology: '乌鸦是世界上最聪明的鸟类之一，能够使用工具、解决复杂问题并展现出社交学习能力。它们有着复杂的社会结构和沟通系统。乌鸦的杂食性使其食物来源广泛，适应能力强。它们的记忆力惊人，能够记住人类的面孔。这种高智商和适应性使乌鸦能够在各种环境中，包括城市环境中繁衍生息。'
          },
          '水豚': {
            mythology: '水豚在传统神话中出现较少，但在现代文化中常被视为和平与社交的象征。它们与各种动物和谐共处的能力使其成为"最友好的动物"的代表。在一些南美文化中，水豚与水元素和丰饶联系在一起。',
            famousPeople: '代表人物包括特蕾莎修女（对所有人都展现出包容和友善）、甘地（倡导非暴力和谐共处）、奥普拉·温弗瑞（善于建立连接和社区）。',
            ethology: '水豚是世界上最大的啮齿动物，以其高度社交性和温和性格著称。它们生活在群体中，通过频繁的社交互动维持关系。水豚与许多其他物种，包括鳄鱼，都能和平共处，这种能力在动物界极为罕见。它们的半水生生活方式和特殊的消化系统使其能够有效利用水生植物资源。这种社交智慧和适应能力使水豚成为热带生态系统中的成功生存者。'
          },
          '鲸': {
            mythology: '在许多海洋文化中，鲸鱼被视为神圣的生物和祖先的化身；在挪威神话中，世界由巨大的鲸鱼支撑；在一些太平洋岛屿文化中，鲸鱼是海洋保护神；在现代文化中，鲸鱼常象征着智慧、神秘和深邃的情感。',
            famousPeople: '代表人物包括列奥纳多·达·芬奇（思想如同海洋般深邃）、卡尔·荣格（心理学大师，探索人类心灵的深度）、玛丽·居里（在科学海洋中探索未知）。',
            ethology: '鲸鱼是地球上最大的哺乳动物，也是最聪明的海洋生物之一。它们拥有复杂的社会结构和沟通系统，能够发出复杂的声音进行长距离交流。鲸鱼的迁徙行为展示了其惊人的导航能力和记忆力。一些鲸鱼种类展现出利他主义行为，会帮助受伤的同伴。这种社会性、智慧和神秘感使鲸鱼成为人类最着迷的海洋生物。'
          },
          '鹦鹉': {
            mythology: '在许多文化中，鹦鹉被视为语言和沟通的象征；在古希腊，鹦鹉与女神雅典娜联系在一起，象征智慧；在玛雅文明中，鹦鹉是神圣的鸟类；在现代文化中，鹦鹉常象征着模仿、社交和活力。',
            famousPeople: '代表人物包括莎士比亚（语言大师，如同鹦鹉般善于运用语言）、奥普拉·温弗瑞（出色的沟通者和社交达人）、爱因斯坦（善于交流复杂思想）。',
            ethology: '鹦鹉以其出色的语言模仿能力和高智商著称。它们是高度社交的鸟类，生活在复杂的群体结构中。鹦鹉的好奇心和学习能力使其能够适应各种环境。它们的长寿（某些种类可活80年以上）使其能够积累丰富的经验和知识。这种社交性、学习能力和长寿使鹦鹉成为人类喜爱的伴侣动物，也是自然界中最具魅力的鸟类之一。'
          },
          '章鱼': {
            mythology: '在古希腊神话中，章鱼与海怪克苏鲁联系在一起；在许多海洋文化中，章鱼被视为智慧和变形的象征；在现代文化中，章鱼常象征着适应性、隐藏和多面性。',
            famousPeople: '代表人物包括达芬奇（多才多艺，如章鱼有多种能力）、居里夫人（在多个科学领域都有贡献）、爱因斯坦（思维方式灵活多变，如同章鱼的触手探索不同方向）。',
            ethology: '章鱼是海洋中最聪明的无脊椎动物，拥有复杂的神经系统和学习能力。它们的八条触手上布满了吸盘，使其能够操纵物体和捕捉猎物。章鱼能够通过改变颜色和纹理进行伪装，是自然界中的伪装大师。它们的解决问题能力和逃脱技巧令人惊叹。这种适应性、智慧和独特的生理特征使章鱼成为海洋中最迷人的生物之一。'
          },
          '鲨鱼': {
            mythology: '在许多海洋文化中，鲨鱼被视为力量和勇气的象征；在波利尼西亚神话中，鲨鱼是保护神；在现代文化中，鲨鱼常象征着专注、高效和生存意志。',
            famousPeople: '代表人物包括迈克尔·乔丹（在篮球场上展现出鲨鱼般的专注力和竞争力）、拿破仑（战略思维直接有效）、史蒂夫·乔布斯（对目标的专注追求）。',
            ethology: '鲨鱼是地球上最古老的脊椎动物之一，已经在地球上生存了超过4亿年。它们是完美的捕食机器，拥有流线型的身体、敏锐的感官和高效的呼吸系统。鲨鱼的侧线系统使其能够感知水中的微小振动，帮助定位猎物。它们的咬合力惊人，能够轻松撕碎猎物。这种专注、高效和适应性使鲨鱼成为海洋中的顶级捕食者，也是进化成功的典范。'
          },
          '海豚': {
            mythology: '在希腊神话中，海豚是海神波塞冬的使者，常帮助遇险的水手；在许多文化中，海豚被视为友善和智慧的象征；在现代文化中，海豚常代表着快乐、自由和团队精神。',
            famousPeople: '代表人物包括毕加索（创造力如海豚般灵动）、罗宾·威廉姆斯（充满活力和幽默感）、纳尔逊·曼德拉（智慧和友善的典范）。',
            ethology: '海豚是高度社会化的海洋哺乳动物，生活在复杂的群体结构中。它们通过复杂的声音和身体语言进行沟通。海豚的智商极高，能够解决复杂问题并展现出自我意识。它们经常进行游戏行为，展现出强烈的好奇心和愉悦感。海豚之间的合作狩猎策略展示了其团队精神。这种社会性、智慧和活力使海豚成为人类最喜爱的海洋生物之一。'
          },
          '浣熊': {
            mythology: '在北美原住民传说中，浣熊常被描绘为聪明的恶作剧者和问题解决者；在现代文化中，浣熊常象征着机智、适应性和好奇心。它们的"洗食物"行为成为其标志性特征，象征着清洁和谨慎。',
            famousPeople: '代表人物包括爱迪生（像浣熊一样善于解决实际问题）、本杰明·富兰克林（发明家，展现出浣熊般的实用智慧）、玛丽·居里（在困难条件下展现出惊人的适应能力）。',
            ethology: '浣熊是高度适应性的哺乳动物，能够在城市和自然环境中生存。它们的前爪极为灵巧，能够操纵物体和打开容器。浣熊是杂食性动物，食物来源广泛，包括水果、坚果、昆虫和小型动物。它们的好奇心和探索精神使其能够发现新的食物来源和栖息地。这种适应性、灵巧和智慧使浣熊成为成功的城市适应者，也是自然界中最具魅力的小型哺乳动物之一。'
          },
          '猫鼬': {
            mythology: '猫鼬在传统神话中出现较少，但在现代文化中，特别是通过《狮子王》中的角色丁满，成为了警觉和社区精神的象征。在一些非洲文化中，猫鼬被视为保护者和哨兵。',
            famousPeople: '代表人物包括尼尔森·曼德拉（为社区利益而奋斗）、甘地（为集体福祉而行动）、马丁·路德·金（为族群权益而战）。',
            ethology: '猫鼬是高度社会化的小型哺乳动物，生活在大型群体中，有着复杂的社会结构。它们的群体中存在明确的分工，包括哨兵职责。猫鼬的视力极佳，能够发现远处的捕食者。它们的捕食策略包括群体协作，共同对付毒蛇等危险猎物。猫鼬之间的相互梳理和社交行为强化了群体纽带。这种社会性、警觉性和团队精神使猫鼬成为沙漠和草原生态系统中的成功生存者。'
          }
        };
        const archetypeContent = document.querySelector('.archetype-content');
        const tScores = (resultState.animalResult && resultState.animalResult.tScores) || {};
        const get = (k) => (Number.isFinite(tScores[k]) ? tScores[k] : 50);
        const score = {
          DOM: get('DOM'),
          STR: get('STR'),
          COM: get('COM'),
          SOL: get('SOL'),
          AGI: get('AGI'),
          SEC: get('SEC'),
          AES: get('AES')
        };
        const level = (v) => (v >= 70 ? 'high' : v <= 40 ? 'low' : 'mid');
        const L = {
          DOM: level(score.DOM),
          STR: level(score.STR),
          COM: level(score.COM),
          SOL: level(score.SOL),
          AGI: level(score.AGI),
          SEC: level(score.SEC),
          AES: level(score.AES)
        };
        const dimLabel = {
          DOM: '支配性',
          STR: '力量感',
          COM: '服从性',
          SOL: '社交性',
          AGI: '灵活性',
          SEC: '安全感',
          AES: '审美性'
        };
        const sorted = Object.entries(score).sort((a, b) => b[1] - a[1]);
        const top1 = sorted[0];
        const top2 = sorted[1];
        const low1 = sorted[sorted.length - 1];
        const low2 = sorted[sorted.length - 2];
        function workEnvText() {
          const evidence = `你在${dimLabel[top1[0]]}和${dimLabel[top2[0]]}相关的任务中，更容易进入稳定且高效的工作状态。`;
          if (score.SEC >= 75) {
            if (score.COM >= 60) {
              return "你更适合在规则清晰、职责边界明确的环境中保持稳定输出。明确的流程和可预期的工作节奏，有助于你将精力集中在把事情做稳、做准上。需要注意的是，若长期缺乏变化，你可能会感到成长受限，建议在既定框架内主动寻找优化空间。" + evidence;
            } else {
              return "你更容易在支持性强、反馈明确的环境中发挥水平。清晰指令能降低不确定感，而被尊重、被理解的团队氛围会显著提升你的投入度。过度竞争或指责型文化，反而可能消耗你的精力。" + evidence;
            }
          }
          if ((score.DOM >= 75 && score.SOL >= 60) || (score.SOL >= 75 && score.DOM >= 60)) {
            return "你需要具备高度影响力感知的环境。必须能感受到自己的意见被重视、工作产生实质性影响。枯燥的重复性劳动会耗尽你的能量，只有能让你在决策与推进中发挥关键作用的团队，才能真正留住你。" + evidence;
          }
          if (score.AGI >= 70 && score.SEC < 50) {
            if (score.SOL >= 60) {
              return "你适合快节奏、高互动的敏捷型环境。你需要频繁的信息流动和灵活的协作方式，繁琐的审批流程会抑制你的动力。扁平化管理、鼓励头脑风暴的团队，能让你保持持久的工作激情。" + evidence;
            } else {
              return "你适合高度自主、结果导向的环境。你不需要过多的社交干扰，更看重能否独立支配时间与资源。只要目标明确，你愿意在相对自由的空间内独自攻克难题，而非时刻处于人际拉扯中。" + evidence;
            }
          }
          if (score.AES >= 70 && score.SOL <= 45) {
              return "你适合安静、优雅且尊重个人空间的专注型环境。嘈杂的开放式办公区和复杂的人际关系会让你分心。你更需要一个能让你静下心来深度思考、打磨作品的物理空间，以保障产出质量。" + evidence;
          }
          return "你的适应力较强，适合混合型环境：既有基础制度保障底线，又有适度弹性供你发挥。最理想的状态是“中庸务实”，既不追求极端的自由，也不接受绝对的管控，根据任务灵活调整即可。" + evidence;
        }

        function careerPathText() {
          const evidence = `你的潜能更集中体现在${dimLabel[top1[0]]}与${dimLabel[top2[0]]}相关的能力组合上。`;
          if (score.DOM >= 65 && score.SOL >= 60) {
            return "你更可能在资源协调、目标推进与跨角色协作类任务中体现价值。你擅长在多方诉求中聚焦关键目标，并推动事情向前发展。需要注意的是，在追求效率的同时，适当为共识建立预留空间，有助于降低后期返工风险。" + evidence;
          }
          if (score.AGI >= 65 && score.AES >= 60) {
            return "你更适合参与新产品探索、创意迭代或策略试验类任务。你对新事物保持敏感，能够快速尝试并调整方向。建议定期将经验沉淀为可复用的方法，以避免能力过度分散。" + evidence;
          }
          if (score.AGI >= 65 && score.STR >= 60) {
            return "你更容易在高不确定性场景中发挥优势，如对外拓展、谈判或攻坚型任务。你的优势更容易在“行动—反馈—迭代”的循环中被放大；将实战经验系统化总结，会显著提升你的长期成长效率。" + evidence;
          }
          if (score.SEC >= 65 && score.COM >= 60) {
            return "你更适合流程搭建、质量控制与持续交付类任务。你倾向于通过稳定可靠的执行建立信任，在需要长期一致性的岗位上更容易形成个人优势。" + evidence;
          }
          if (score.STR >= 70 || (score.STR >= 65 && score.AES >= 55)) {
            return "你更适合在专业深度要求较高的领域持续投入，例如技术攻关、专业咨询或内容创作。长期聚焦于复杂问题的解决，有助于你构建难以替代的专业壁垒。" + evidence;
          }
          return "你的职业适配范围相对广泛，具备较强的可塑性。通过早期多样化尝试，找到既能产生投入感又能获得成果反馈的方向，再进行持续深化，会更符合你的发展节奏。" + evidence;
        }

        function emotionText() {
          if (score.SEC >= 70) {
            let t = "你的情感模式更偏向于寻求稳定与信任。在关系中，你对不确定性较为敏感，持续的确认与正向反馈有助于你保持安心与投入。这使你往往表现得可靠而有责任感。";
            if (score.SOL >= 70) t += "高质量且稳定的人际互动，能够有效增强你的情感安全感。";
            else if (score.SOL <= 30) t += "在独处中整理情绪、恢复秩序，是你应对不安的重要方式。";
            return t;
          }
          if (score.SEC <= 30) {
            let t = "你的情感模式更偏向内部自洽。你不太依赖外部持续的情感支持来维持状态，对环境变化具备较强的适应力。这种情感独立性让你在波动中能保持自主节奏。";
            if (score.SOL >= 70) t += "即便如此，你依然重视真诚且无需过度消耗的深度关系。";
            else if (score.SOL <= 30) t += "独处往往是你获得情感恢复与内在能量的主要来源。";
            return t;
          }
          if (score.SOL >= 70) {
            let t = "你从人际连接中获得较多情感能量。高质量的互动能显著提升你的情绪状态，你也更容易在群体中感知他人情绪并作出回应。";
            if (score.SEC >= 60) t += "稳定而互信的关系，是你建立长期连接的重要基础。";
            else if (score.SEC <= 40) t += "多样而充满活力的社交体验，能持续为你提供新鲜感。";
            return t;
          }
          if (score.SOL <= 30) {
            let t = "你的情感模式更偏向内在探索。过多的社交互动可能让你感到消耗，你更倾向于在独处中恢复精力并整理思绪。";
            if (score.SEC >= 60) t += "一个安全、不被频繁打扰的私人空间，对你尤为重要。";
            else if (score.SEC <= 40) t += "享受独处并从中汲取力量，是你保持内在平衡的重要方式。";
            return t;
          }
          if (score.AES >= 70) {
            return "你对情绪与氛围具有较高敏感度，能够捕捉到环境和关系中的细微变化。这使你在追求精神契合时标准较高，也需要注意避免因过度共鸣而产生情绪疲劳。";
          }
          return "你的情感模式整体较为平衡。你既能感知他人情绪，也能保持必要的内在边界，根据情境灵活调整情感投入程度。";
        }

        function thinkingText() {
          const evidence = `在涉及${dimLabel[top1[0]]}和${dimLabel[top2[0]]}的任务中，你的思维方式更占优。`;
          if (score.AGI >= score.STR + 20) {
            return "你的思维更偏向发散探索，擅长从宏观视角进行联想与组合。这有利于创意生成与策略构想，但也可能带来较高的“收敛成本”。建议设定明确的筛选标准，将想法转化为可执行方案。" + evidence;
          }
          if (score.STR >= score.AGI + 20) {
            return "你的思维属于聚焦型，擅长深度归纳与逻辑推演。这种特质有助于攻克复杂难题，但也可能形成“隧道视野”。在做决策时引入“逆向思考”，听取不同意见，有助于修正认知偏差。" + evidence;
          }
          if (score.DOM >= 70) {
            return "你的思维高度结果导向，习惯从终局反推路径。这种直觉式决策在需要快速响应的情境下极具效率，但也可能忽略执行层面的风险。建议预先推演失败可能，以提升决策的稳健性。" + evidence;
          }
          if (score.AES >= 70) {
            return "你的思维偏好整体感知与具象化处理。相比于纯逻辑推导，你对画面感、风格与整体性的判断更为敏锐。在创意领域这是核心优势，但在严谨工作中，需借助结构化工具将直觉转化为可验证的逻辑。" + evidence;
          }
          return "你拥有灵活的双系统思维能力，既能发散探索也能聚焦深挖。根据任务性质在两种模式间自由切换，是你的核心优势。建议根据场景有意识地调整思维策略：策划时大胆假设，执行时严谨求证。" + evidence;
        }

        function growthText() {
          const adviceMap = {
            DOM: '在关键决策点表达立场，并说明判断依据，以提升影响力的可见度。',
            STR: '建立“小步快跑”的目标管理机制。将宏大目标拆解为可立即执行的小任务，通过不断积累微小的成就感来构建自我效能感。',
            COM: '在执行过程中尝试升维思考。理解规则背后的逻辑，并尝试提出优化建议，是从执行者向协作者进阶的关键。',
            SOL: '主动打破“信息茧房”。有意识地接触不同角色与视角，获取多元信息以拓展认知边界。',
            AGI: '定期进行“认知刷新”。定期接触新领域或尝试新方法，这不仅能提升大脑的可塑性，更能让你在熟悉领域中保持新鲜感和创造性。',
            SEC: '建立系统性的风险管理思维。通过制定详尽的应急预案来构建内在的安全感，而非单纯回避风险。',
            AES: '强化“价值理性”维度。在关注效率与产出的同时，引入对品质与意义的评估，有助于你从同质化竞争中脱颖而出。'
          };

          const a = low1[0];
          const b = low2[0];
          
          if (Math.round(low1[1]) >= 45 && Math.round(low2[1]) >= 45) {
            return "你的特质分布相对均衡，具备较强的适应性。当前阶段更适合放大已有优势，通过多维能力的组合，形成复合型竞争力，而非刻意补齐所有短板。";
          }
          return `当前更值得优先投入的是${dimLabel[a]}：${adviceMap[a]} 同时，可逐步加强${dimLabel[b]}：${adviceMap[b]}`;
        }

        const data = archetypeData[animalName] || {
          mythology: '这个动物在神话传说中有着丰富的象征意义，代表着人类对自然和生命的理解与想象。',
          famousPeople: '许多历史和公众人物展现出与这种动物相似的性格特质，他们的故事激励着我们理解这种性格类型的潜力。',
          ethology: '从动物行为学角度看，这种动物的生存策略和行为模式为我们理解相关性格特质提供了有趣的视角。'
        };
        archetypeContent.innerHTML = `
          <div class='analysis-section'>
            <h4 class='analysis-subtitle'>职业建议</h4>

            <div class='contrast-item'>
              <p class='contrast-title'>适合的工作环境</p>
              <p class='contrast-description'>${workEnvText()}</p>
            </div>

            <div class='contrast-item'>
              <p class='contrast-title'>职业发展路径</p>
              <p class='contrast-description'>${careerPathText()}</p>
            </div>
          </div>

          <div class='analysis-section'>
            <h4 class='analysis-subtitle'>模式分析</h4>
            
            <div class='contrast-item'>
              <p class='contrast-title'>情感模式分析</p>
              <p class='contrast-description'>${emotionText()}</p>
            </div>

            <div class='contrast-item'>
              <p class='contrast-title'>思维模式分析</p>
              <p class='contrast-description'>${thinkingText()}</p>
            </div>
            
            <div class='contrast-item'>
              <p class='contrast-title'>成长建议</p>
              <p class='contrast-description'>${growthText()}</p>
            </div>
          </div>

          <div class='archetype-section'>
            <h4 class='archetype-subtitle'>动物行为学解读</h4>
            <p class='archetype-description'>${data.animalBehavior || data.ethology}</p>
          </div>

          <div class='archetype-section'>
            <h4 class='archetype-subtitle'>神话与文化象征</h4>
            <p class='archetype-description'>${data.mythology}</p>
          </div>
          
          <div class="archetype-section">
            <h4 class="archetype-subtitle">著名人物对照</h4>
            <p class="archetype-description">${data.famousPeople}</p>
          </div>
        `;
      }
      function renderRadarChart(tScores) {
        // 没有 Chart 直接跳过
        if (typeof window.Chart === 'undefined') {
          console.warn('Chart.js 未加载成功，跳过雷达图渲染');
          const container = document.getElementById('radar-chart-container');
          if (container) {
            container.style.display = 'none';
          }
          return;
        }
        const dimensionNames = {
          'DOM': '支配性',
          'STR': '力量感',
          'COM': '服从性',
          'SOL': '社交性',
          'AGI': '灵活性',
          'SEC': '安全感',
          'AES': '审美性'
        };
        const ctx = document.getElementById('dimensions-radar-chart').getContext('2d');
        const labels = Object.values(dimensionNames);
        const data = Object.values(tScores);
        if (window.dimensionsRadarChart) {
          window.dimensionsRadarChart.destroy();
        }
        window.dimensionsRadarChart = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: labels,
            datasets: [{
              label: '你的性格维度得分',
              data: data,
              backgroundColor: 'rgba(138, 43, 226, 0.2)',
              borderColor: 'rgba(138, 43, 226, 1)',
              borderWidth: 2,
              pointBackgroundColor: 'rgba(138, 43, 226, 1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(138, 43, 226, 1)'
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              r: {
                beginAtZero: true,
                max: 100,
                ticks: {
                  stepSize: 20,
                  backdropColor: 'transparent',
                  color: '#666'
                },
                pointLabels: {
                  font: {
                    size: 14,
                    weight: 'bold',
                    family: "'PingFang SC', 'Microsoft YaHei', sans-serif"
                  },
                  color: '#333'
                },
                grid: {
                  color: 'rgba(0, 0, 0, 0.1)'
                },
                angleLines: {
                  color: 'rgba(0, 0, 0, 0.1)'
                }
              }
            },
            plugins: {
              legend: {
                display: true,
                position: 'bottom',
                labels: {
                  color: '#333',
                  font: {
                    size: 14
                  }
                }
              },
              tooltip: {
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                titleColor: '#333',
                bodyColor: '#7c3aed',
                borderColor: '#8b5cf6', 
                borderWidth: 1, 
                cornerRadius: 8,
                padding: 12, 
                displayColors: false,
                titleFont: {
                  size: 14,
                  weight: 'bold'
                },
                bodyFont: {
                  size: 16,
                  weight: 'bold'
                },
                callbacks: {
                  label: function(context) {
                    return `得分: ${Math.round(context.parsed.r)}`;
                  }
                }
              }
            },
            interaction: {
              intersect: false,
              mode: 'index'
            }
          }
        });
      }
      function renderError() {
        elements.loading.style.display = 'none';
        elements.error.style.display = 'block';
      }
      loadAndCalculateResult();
