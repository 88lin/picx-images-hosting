const quizData = [
        { question: "世界是一片漆黑的森林，你选择成为？", options: { A: "森林本身，感受每一片树叶。", B: "在林间温暖的篝火。", C: "隐藏在古树根下深不见底的古井。", D: "一阵穿过所有缝隙的风。" } },
        { question: "你获得了一块记忆橡皮擦，你会擦掉？", options: { A: "别人对你的所有亏欠，让心灵彻底自由。", B: "你最尴尬最羞耻的那个瞬间。", C: "一段让你心碎的感情。", D: "你犯下的一个无法弥补的错误。" } },
        { question: "你意外获得了一个“生活BUG”的控制台，但一天只能使用一个指令，你会输入？", options: { A: "显示所有事物的隐藏信息", B: "召唤会跳舞的羊驼和朋友", C: "一键生成绝对舒适区", D: "开启主角光环" } },
        { question: "你更倾向于哪种形式的“永生”？", options: { A: "你的思想、作品或传说被永远流传。", B: "灵魂转世，不断体验不同的人生。", C: "拥有不朽的肉体，看着沧海桑田。", D: "化为自然的一部分，如山脉或河流，静观万物。" } },
        { question: "你内心最深处的恐惧，更接近于？", options: { A: "被所有人遗忘，仿佛从未存在过。", B: "成为一个无聊、平庸、可被替代的人。", C: "失去控制，被原始的冲动或混乱所吞噬。", D: "被囚禁，无论是物理上还是精神上。" } },
        { question: "在你的梦境中，哪种场景反复出现？", options: { A: "在无边无际的水中，时而漂浮，时而下沉。", B: "站在悬崖边，俯瞰着壮丽但危险的景色。", C: "在一个错综复杂的建筑里奔跑，找不到出口。", D: "和一群模糊不清但感觉熟悉的人在一起。" } },
        { question: "如果你的情绪是一个APP，它最常用的功能是？", options: { A: "“后台运行”模式，表面风平浪静，CPU已经算到冒烟。", B: "“弹幕分享”功能，把所有内心OS都发到好友群里。", C: "“飞行模式”，一键断开所有连接，谢绝打扰。", D: "“静音模式”，所有通知都只显示角标，不发出任何声音。" } },
        { question: "你认为“家”的本质是什么？", options: { A: "一个可以卸下所有伪装和防备的绝对领域。", B: "一群可以无条件接纳你、与你共享喜悦的人。", C: "刻在你基因里但那个回不去的故乡。", D: "一个精神坐标，无论身在何处，心之所向。" } },
        { question: "如果必须选择一种感官来放大十倍，你会选？", options: { A: "听觉，聆听万物的低语和弦外之音。", B: "触觉，感受世界的质地和温度。", C: "嗅觉，捕捉空气中隐藏的信息和记忆。", D: "视觉，看穿表象，洞悉世界的结构。" } },
        { question: "你如何看待自己的“阴暗面”？", options: { A: "是我力量的源泉，需要被理解和掌控。", B: "是需要努力克服的弱点。", C: "只是我的一部分，没必要大惊小怪。", D: "我尽量忽略它，不去想它。" } },
        { question: "你渴望拥有的“知识”是？", options: { A: "看透人心的能力。", B: "与自然万物沟通的语言。", C: "预测未来的水晶球。", D: "解锁宇宙终极规律的钥匙。" } },
        { question: "死亡来临时，你希望它是何种形态？", options: { A: "如秋叶般静美地飘落，回归大地。", B: "像烟花一样，在最绚烂的瞬间燃烧殆尽。", C: "像一场远航，驶向未知的星辰大海。", D: "像一场酣睡，在最温暖的梦中不再醒来。" } },
        { question: "你觉得最“性感”的特质是？", options: { A: "饱经沧桑后依旧清澈的眼神。", B: "毫不掩饰的原始的生命力。", C: "在混乱中依旧保持从容的优雅。", D: "专注做某件事时，遗世独立的气质。" } },
        { question: "如果可以保留一段声音在脑中循环播放，你会选？", options: { A: "海浪拍打礁石的声音。", B: "爱人在耳边的低语。", C: "风吹过树林发出的沙沙声。", D: "图书馆里安静的翻书声。" } },
        { question: "你认为自己更像？", options: { A: "一本需要密码才能打开的古书。", B: "一张错综复杂通往宝藏的地图。", C: "一个装满了故事和秘密的漂流瓶。", D: "一把能打开无数把锁的钥匙。" } },
        { question: "你是一座岛屿，你希望别人如何登岛？", options: { A: "我会建立一座坚固的桥，只让我认可的人通过。", B: "我的海岸线很长，欢迎任何人停靠，但中心区域不对外开放。", C: "我会用迷雾将自己环绕，只有最执着的人才能找到航线。", D: "我是一座会移动的岛，只在特定的时候与大陆连接。" } },
        { question: "在一段关系中，你更像一个？", options: { A: "给予对方温暖和光亮的“恒星”。", B: "守护对方提供庇护的“港湾”。", C: "引领对方探索未知世界的“向导”。", D: "与对方共舞相互映照的“月亮”。" } },
        { question: "你的朋友被一只巨大的棉花糖怪兽困住了，你冲过去的第一反应是？", options: { A: "大喊：“别动！让我分析一下它的弱点！”", B: "抄起一个巨大的勺子：“朋友挺住！我来帮你吃出一条路！”", C: "陪他静静坐着，然后拿出手机自拍。", D: "冷静地指挥：“你左边三步，然后跳起来！”" } },
        { question: "你最不能容忍的“背叛”是？", options: { A: "谎言与欺骗。", B: "在我最需要的时候转身离开。", C: "将我的秘密公之于众。", D: "因为懦弱而放弃了我们的共同目标。" } },
        { question: "当你深爱一个人时，你更倾向于如何表达这份感情？", options: { A: "默默地为对方做好许多事，但从不主动提起。", B: "将对方纳入自己未来的规划，并为其扫清障碍。", C: "与对方分享自己最隐秘的精神世界和独特的发现。", D: "创造只属于两个人的共同经历和冒险回忆。" } },
        { question: "你理想的伴侣关系是？", options: { A: "两棵独立的树，根在地下紧紧相连。", B: "一团火焰，相互燃烧，照亮彼此。", C: "一个安全的洞穴，共同抵御外界的风雨。", D: "两只一同翱翔的鹰，共享同一片天空。" } },
        { question: "在群体中，你最舒服的位置是？", options: { A: "在舞台的聚光灯下。", B: "在人群边缘，做一个冷静的观察者。", C: "在亲密的小圈子里，被温暖和信任包围。", D: "在队伍的最前方，带领大家前进。" } },
        { question: "一个路过的小精灵对你比了个心，你会？", options: { A: "迅速回一个更酷的手势。", B: "开心地比一个更大的心，并附赠一个wink。", C: "脸一红，害羞地低下头，但嘴角忍不住上扬。", D: "礼貌性地点点头，然后在心里给它的可爱程度打个分。" } },
        { question: "你认为最浪漫的事是？", options: { A: "在暴风雨的夜晚，共享一杯热茶。", B: "一场说走就走充满未知的冒险。", C: "读懂对方一个眼神里所有未说出口的话。", D: "共同创造一个只属于你们的、伟大的作品。" } },
        { question: "你会为什么样的人“拼命”？", options: { A: "为那个点燃我灵魂之火的人。", B: "为我视为“家人”的整个群体。", C: "为那个无条件信任我、依赖我的人。", D: "为值得我追随的拥有共同信念的领袖。" } },
        { question: "如果爱是一种“馈赠”，你倾向于给予？", options: { A: "我最珍贵的收藏。", B: "我全部的时间和陪伴。", C: "我绝对的忠诚和保护。", D: "我对世界的理解和智慧。" } },
        { question: "当关系结束时，你更像是？", options: { A: "冰封的火山，外冷内热。", B: "改道的河流，奔向新的海洋。", C: "被砍掉枝干的树，需要漫长的春天才能发芽。", D: "被风吹散的云，形态改变，本质依旧。" } },
        { question: "在一场化妆舞会上，你觉得哪种装扮最能吸引到“对的人”？", options: { A: "戴着乌鸦面具的神秘魔术师。", B: "穿着毛茸茸恐龙睡衣的派对核心。", C: "假扮成一棵树，安静地待在角落。", D: "穿着未来感十足的银色盔甲的神明。" } },
        { question: "你更希望被如何“记住”？", options: { A: "一个有趣的灵魂，一个传奇的故事。", B: "一个可靠的朋友，一个温暖的港湾。", C: "一个优雅的谜，一段美丽的风景。", D: "一个伟大的领袖，一个时代的开创者。" } },
        { question: "你最想对这个世界说的一句话是？", options: { A: "“嘘，听。”", B: "“一起玩吧！”", C: "“别怕，有我呢。”", D: "“看好了。”" } },
        { question: "你在一场必须分出胜负的游戏中，你的策略是？", options: { A: "精心布局，诱敌深入，最后一击致命。", B: "用绝对的力量或气势正面碾压。", C: "找到规则的漏洞，用意想不到的方式获胜。", D: "结成联盟，牺牲局部，换取最终的集体胜利。" } },
        { question: "你得到了一份藏宝图，但标注了“极度危险”，你会？", options: { A: "独自前往，宝藏和秘密只属于我一人。", B: "组建一支精英团队，共享收益与风险。", C: "把它卖给更有能力的人，换取眼前的利益。", D: "先花大量时间研究地图，分析所有风险，再做决定。" } },
        { question: "面对挑衅，你的第一反应是？", options: { A: "一个冷酷的眼神，让对方知难而退。", B: "一声响亮的咆哮，宣示我的底线。", C: "转身离开，不与傻瓜论长短。", D: "微笑，但在心里已经将对方盘算了一遍。" } },
        { question: "你认为“权力”的本质是？", options: { A: "制定规则的资格。", B: "保护所爱之人的能力。", C: "一种可以交换一切的筹码。", D: "一种沉重的责任。" } },
        { question: "在“真心话大冒险”游戏中，你发现了一个必胜BUG，你会？", options: { A: "暗中利用，精准地让某人说出秘密。", B: "大声告诉所有人，然后玩点更刺激的！", C: "假装不知道，享受提心吊胆的感觉。", D: "利用BUG让游戏和平结束，去看电影。" } },
        { question: "你更擅长？", options: { A: "在混乱中创造秩序。", B: "在秩序中制造惊喜。", C: "适应任何环境，像水一样无形。", D: "建立一个全新的属于自己的体系。" } },
        { question: "一个巨大的机遇摆在你面前，但需要你放弃现在的安稳生活，你？", options: { A: "赌一把，人生需要激情。", B: "极度纠结，反复衡量得失。", C: "算了，安稳比什么都重要。", D: "如果这个机遇符合我的长远规划，就去。" } },
        { question: "你如何利用你的“优势”？", options: { A: "藏起来，作为关键时刻的底牌。", B: "大方地展示，吸引同伴或震慑敌人。", C: "只在我信任的人面前展现。", D: "用它来帮助那些需要帮助的人。" } },
        { question: "你参加了一场“用梗图battle”的比赛，你的必杀技是？", options: { A: "极其冷门但精准吐槽的哲学梗图。", B: "能让全场爆笑的“猫猫狗狗”表情包连击。", C: "经典的略带伤感的自嘲梗图。", D: "信息量巨大的“史诗级”长图。" } },
        { question: "你如何看待“捷径”？", options: { A: "最聪明的选择。", B: "往往是陷阱。", C: "如果能走，为什么不走？", D: "我更喜欢自己走出一条路。" } },
        { question: "你的死对头变成了一只只会“咕”的鸽子，落在了你的窗台，你会？", options: { A: "教它用摩斯密码“咕”出认罪书。", B: "养得肥肥胖胖，在它面前吃炸鸡。", C: "给它搭窝喂米，然后思考自己是不是太善良。", D: "把它绑在无人机上放飞，附上纸条：“自己飞回来吧，菜鸟。”" } },
        { question: "你犯错后，最倾向于？", options: { A: "悄悄弥补，当做什么都没发生过。", B: "公开承认，承担后果。", C: "自责很久，陷入情绪低谷。", D: "分析错误原因，确保不再犯。" } },
        { question: "你认为最强大的“武器”是？", options: { A: "无法被预测的头脑。", B: "坚不可摧的意志。", C: "令人无法抗拒的魅力。", D: "绝对的忠诚。" } },
        { question: "你丢失了一件非常重要的东西，你会？", options: { A: "发疯一样地寻找，不惜一切代价。", B: "伤心一会儿，然后告诉自己该放下了。", C: "相信它总有一天会以某种形式回来。", D: "把它当成一次教训，记住这种失去的感觉。" } },
        { question: "你更愿意成为？", options: { A: "棋手。", B: "棋子（国王或皇后）。", C: "旁观的智者。", D: "掀翻棋盘的人。" } },
        { question: "你最向往的“美”是？", options: { A: "诞生于毁灭之中的残酷的美。", B: "脆弱而转瞬即逝的美。", C: "经过时间沉淀后充满智慧的美。", D: "雄伟、壮丽、不可征服的美。" } },
        { question: "如果用一种天气来形容你的内心世界，它会是？", options: { A: "雷鸣电闪的暴风雨夜。", B: "阳光和煦微风拂面的午后。", C: "安静飘雪万籁俱寂的冬日。", D: "变幻莫测时有彩虹的阵雨天。" } },
        { question: "你退休后，打算在哪里开一家“只招待有缘人”的奇怪小店？", options: { A: "在宇宙空间站里，开一家“失物招领处”。", B: "在移动岛屿上，开一家“能量补给站”。", C: "在图书馆地下室，开一家“懒人沙发店”。", D: "在珠穆朗玛峰顶，开一家“灵魂便利店”。" } },
        { question: "在艺术作品中，哪种颜色最能代表你的灵魂底色？", options: { A: "深邃的普鲁士蓝或暗夜黑。", B: "明亮的金黄或橙红。", C: "温柔的象牙白或浅粉色。", D: "高贵的银灰或纯白。" } },
        { question: "你认为哪种声音最接近“神性”？", options: { A: "宇宙深处的脉冲信号。", B: "新生儿的第一声啼哭。", C: "鲸鱼在深海中的歌唱。", D: "无声，绝对的寂静。" } },
        { question: "如果你的身体必须由一种非生物材料构成，你希望是？", options: { A: "透明但易碎的玻璃。", B: "会发光的钻石。", C: "Q弹的果冻。", D: "永远保持锋利的精密合金。" } },
        { question: "你认为什么东西是“无价”的？", options: { A: "自由。", B: "爱。", C: "安全感。", D: "时间。" } },
        { question: "你更愿意与哪种“神”对话？", options: { A: "智慧与诡计之神。", B: "战争与守护之神。", C: "爱与美之神。", D: "自然与生命之神。" } },
        { question: "你发现了一个可以穿梭时空的罗盘，第一次启动时，你希望指针指向哪里？", options: { A: "指向魔法与巨龙存在的失落古代。", B: "指向科技高度发达人人安居乐业的理想未来。", C: "指向尚未被探索的充满原始生命力的秘境。", D: "指向你童年最无忧无虑的那个夏天。"  } },
        { question: "你更像哪种水？", options: { A: "能滴水穿石的执着水滴。", B: "能容纳百川的辽阔大海。", C: "能倒映天空的平静湖泊。", D: "能冲毁一切的滔天巨浪。" } },
        { question: "你认为最酷的“活法”是？", options: { A: "成为一个都市传说。", B: "成为一部超长待机番剧的主角。", C: "成为一个被机器人精心照料的盆栽。", D: "成为游戏里的最终BOSS。" } },
        { question: "你如何看待“命运”？", options: { A: "一张可以被改写的草稿。", B: "一条虽然曲折但终点已定的河流。", C: "一场需要全力以赴的赌局。", D: "根本不存在的东西。" } },
        { question: "如果让你创造一个世界，你最先创造什么？", options: { A: "规则和逻辑。", B: "光和生命。", C: "音乐和色彩。", D: "秘密和谜题。" } },
        { question: "在生命的尽头，你回望一生，最让你感到自豪的是？", options: { A: "我从未背叛过我自己。", B: "我用生命守护了我爱的一切。", C: "我过得舒适安逸，没留下什么遗憾。", D: "我达到了无人企及的高度。" } },
        { question: "选择你的灵魂图腾：", options: { A: "螺旋。", B: "心形。", C: "圆圈。", D: "三角。" } },
    ];

    // 计分规则 - 均衡分配各维度得分权重
    const scoreMap = [
        // 第一章：(1-15题)
        { A: { AES: 2 }, B: { COM: 2 }, C: { SOL: 2 }, D: { AGI: 2 } },
        { A: { COM: 2 }, B: { SEC: 2 }, C: { AES: 2 }, D: { STR: 2 } },
        { A: { STR: 2 }, B: { COM: 2 }, C: { SEC: 2 }, D: { DOM: 2 } },
        { A: { STR: 2 }, B: { AGI: 2 }, C: { DOM: 2 }, D: { SOL: 2 } },
        { A: { SOL: 2 }, B: { AGI: 2 }, C: { DOM: 2 }, D: { SEC: 2 } },
        { A: { AES: 2 }, B: { DOM: 2 }, C: { STR: 2 }, D: { COM: 2 } },
        { A: { SOL: 2 }, B: { COM: 2 }, C: { SEC: 2 }, D: { AES: 2 } },
        { A: { SEC: 2 }, B: { COM: 2 }, C: { SOL: 2 }, D: { DOM: 2 } },
        { A: { COM: 2 }, B: { SEC: 2 }, C: { STR: 2 }, D: { AGI: 2 } },
        { A: { DOM: 2 }, B: { SEC: 2 }, C: { AES: 2 }, D: { SOL: 2 } },
        { A: { STR: 2 }, B: { AES: 2 }, C: { DOM: 2 }, D: { AES: 2 } },
        { A: { AES: 2 }, B: { DOM: 2 }, C: { SOL: 2 }, D: { SEC: 2 } },
        { A: { AES: 2 }, B: { DOM: 2 }, C: { AES: 2 }, D: { SOL: 2 } },
        { A: { AES: 2 }, B: { COM: 2 }, C: { STR: 2 }, D: { SEC: 2 } },
        { A: { SOL: 2 }, B: { STR: 2 }, C: { COM: 2 }, D: { AGI: 2 } },
        
        // 第二章：(16-30题)
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
        
        // 第三章： (31-45题)
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
        
        // 第四章：(46-60题)
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

    // 动物原型定义 - 增加原型总分基数，便于归一化
    // DOM:支配, STR:策略, COM:社群, SOL:独行, AGI:灵动, SEC:安稳, AES:审美
    const ANIMAL_ARCHETYPE_TOTAL = 20; // 定义一个原型总分基数
    const animalArchetypes = {
        "狗": { vector: { DOM: 1, STR: 1, COM: 5, SOL: 0, AGI: 3, SEC: 4, AES: 1 }, desc: "你是忠诚的伙伴与热情的守护者。你的世界围绕着“我们”展开，无论是家人、朋友还是团队。你擅长建立连接，给予温暖，并在群体中找到自己的价值。你的快乐简单而纯粹，来源于陪伴与被需要。" },
        "猫": { vector: { DOM: 1, STR: 2, COM: 0, SOL: 5, AGI: 4, SEC: 2, AES: 3 }, desc: "你是优雅的独立思想家，神秘且自我满足。你享受独处，拥有丰富的内心世界。你行动敏捷，好奇心强，但只对自己感兴趣的事物投入精力。你的魅力在于那份若即若离的疏离感和无法预测的灵动。" },
        "狼": { vector: { DOM: 4, STR: 4, COM: 3, SOL: 2, AGI: 2, SEC: 1, AES: 0 }, desc: "你是天生的领袖与战略家，兼具力量与社群智慧。你既能独立思考，又能无缝地融入团队。你对目标执着，有强烈的责任感和领地意识，为了守护族群，你会展现出惊人的统御力和谋略。" },
        "狐": { vector: { DOM: 1, STR: 5, COM: 0, SOL: 4, AGI: 4, SEC: 1, AES: 1 }, desc: "你是机敏的策略家与孤独的观察者。你拥有超凡的智慧和适应能力，擅长在复杂的环境中找到最优解。你倾向于独立行动，用敏锐的洞察力规避风险，达成目标。你的生存哲学是“智取”而非“强攻”。" },
        "狮": { vector: { DOM: 5, STR: 2, COM: 3, SOL: 3, AGI: 1, SEC: 2, AES: 2 }, desc: "你是自信的王者，天生自带光环。你有强烈的统御欲和表现力，享受成为焦点的感觉。你慷慨、富有魅力，但有时也需要独处的空间来积蓄力量。你的存在本身就是一种宣告，充满力量与威严。" },
        "熊": { vector: { DOM: 3, STR: 1, COM: 1, SOL: 4, AGI: 0, SEC: 5, AES: 1 }, desc: "你是沉稳的守护者，强大而内敛。你大部分时间安静、平和，享受自己的节奏，但当领地或家人受到威胁时，会爆发出无与伦比的力量。你重视安全感，喜欢为自己和亲近的人建立一个舒适、安全的庇护所。" },
        "兔": { vector: { DOM: 0, STR: 1, COM: 2, SOL: 2, AGI: 5, SEC: 5, AES: 2 }, desc: "你是警觉的和平主义者，敏捷且富有同情心。你极度需要安全感，对环境变化非常敏感。你行动迅速，擅长躲避冲突。虽然有时会显得胆小，但你在熟悉和安全的小圈子里，会展现出活泼、温和的一面。" },
        "仓鼠":{ vector: { DOM: 0, STR: 0, COM: 2, SOL: 4, AGI: 1, SEC: 5, AES: 1 }, desc: "你是专注的囤积者与安逸的生活家。你最大的幸福来自于建立一个充满安全感的“小窝”。你喜欢收集和整理，无论是物质还是信息。你享受在自己的小世界里自得其乐，对外界的纷扰保持着一种可爱的迟钝。" },
        "天鹅":{ vector: { DOM: 2, STR: 1, COM: 2, SOL: 3, AGI: 1, SEC: 2, AES: 5 }, desc: "你是优雅的理想主义者，对美有着极致的追求。你姿态高贵，带有一种天生的距离感，但内心深处对伴侣和家庭极为忠诚。你的世界里，精神的契合与外在的和谐同样重要，绝不容忍粗俗与将就。" },
        "鹿":  { vector: { DOM: 1, STR: 1, COM: 3, SOL: 3, AGI: 3, SEC: 4, AES: 4 }, desc: "你是温和的自然之子，敏感而优雅。你对美和宁静有着天生的向往，常常沉浸在自己的精神世界里。你警惕性高，需要安全的环境才能放松。你的美在于那份不染尘埃的纯净和与自然融为一体的灵性。" },
        "鹰":  { vector: { DOM: 4, STR: 3, COM: 0, SOL: 5, AGI: 2, SEC: 1, AES: 2 }, desc: "你是高傲的远见者，拥有无与伦比的视野和决心。你习惯于从高处审视全局，制定长远的目标。你享受孤独，因为那能让你看得更清。你的力量不仅在于捕猎的利爪，更在于那份凌驾于一切之上的独立意志和宏大格局。" },
        "乌鸦":{ vector: { DOM: 2, STR: 5, COM: 4, SOL: 2, AGI: 3, SEC: 1, AES: 0 }, desc: "你是聪慧的谜题解决者与信息的传递者。你拥有极高的智商和好奇心，善于观察、学习和使用工具。你具有复杂的社会结构，擅长合作与沟通。在别人看来，你或许有些神秘甚至不祥，但这正是你智慧的保护色。" },
        "水豚":{ vector: { DOM: 0, STR: 0, COM: 5, SOL: 2, AGI: 1, SEC: 5, AES: 2 }, desc: "你是随和的社交大师，情绪稳定，万物皆可为友。你的存在本身就能给周围带来平静与和谐。你享受社群生活，但从不强求，用一种“佛系”的态度接纳一切。你的哲学是：放轻松，没什么大不了的。" },
        "鲸":  { vector: { DOM: 2, STR: 3, COM: 4, SOL: 4, AGI: 0, SEC: 2, AES: 4 }, desc: "你是深海的哲学家，古老而智慧。你承载着厚重的记忆，用深沉的歌声在广阔的社群中交流。你既能融入庞大的集体，又保持着个体的深邃孤独。你的内心像海洋一样，平静时包容万物，翻涌时充满力量。" },
        "鹦鹉":{ vector: { DOM: 1, STR: 2, COM: 5, SOL: 1, AGI: 5, SEC: 1, AES: 2 }, desc: "你是聪明的社交达人与天生的表演家。你热爱互动，擅长模仿和学习，是群体中的“开心果”和信息中心。你活泼好动，充满好奇心，总能给平淡的生活增添色彩和戏剧性。你的智慧体现在与他人的互动和交流中。" },
        "章鱼":{ vector: { DOM: 2, STR: 5, COM: 0, SOL: 5, AGI: 4, SEC: 1, AES: 1 }, desc: "你是深海的智者与伪装大师。你拥有惊人的智慧和解决问题的能力，身体的每一次变形都是一次策略的展现。你习惯于独立思考和行动，在复杂环境中展现出极强的适应性和创造力。你是真正的“多面手”。" },
        "鲨鱼":{ vector: { DOM: 5, STR: 3, COM: 0, SOL: 5, AGI: 3, SEC: 0, AES: 0 }, desc: "你是高效的目标追逐者，专注、直接、充满力量。你一旦锁定目标，便会心无旁骛地前进。你习惯独来独往，不需要复杂的社交关系。你的生存法则简单而纯粹：不断前进，永不停止。" },
        "海豚":{ vector: { DOM: 3, STR: 4, COM: 5, SOL: 0, AGI: 4, SEC: 1, AES: 1 }, desc: "你是智慧的嬉戏者与团队合作的典范。你拥有高度发达的大脑和复杂的社会行为，擅长通过合作解决问题。你充满玩乐精神，将生活视为一场有趣的游戏。你的快乐来源于与同伴的协作和探索世界的无穷乐趣。" },
        "浣熊":{ vector: { DOM: 1, STR: 4, COM: 2, SOL: 3, AGI: 5, SEC: 2, AES: 0 }, desc: "你是机灵的都市探险家，总能找到解决问题的“歪路子”。你好奇心极强，动手能力超群，为了达成目的可以不择手段（通常是为了吃的）。你非常灵活，总能在人类制定的规则中找到自己的生存空间。" },
        "猫鼬":{ vector: { DOM: 2, STR: 3, COM: 5, SOL: 1, AGI: 3, SEC: 5, AES: 0 }, desc: "你是警惕的哨兵与家庭的守护者。你对集体有着极强的归属感和责任心，时刻为家人的安全站岗放哨。你们的生存依赖于高效的团队协作和分工。你的勇敢不是为了个人，而是为了整个族群的安危。" }
    };

// DOM元素
    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultScreen = document.getElementById('result-screen');
    const interludeScreen = document.getElementById('interlude-screen');
    const loadingScreen = document.getElementById('loading-screen');
    const animalGuideScreen = document.getElementById('animal-guide-screen');

    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');
    const backBtn = document.getElementById('back-btn');
    const browseBtn = document.getElementById('browse-btn');
    const backToResultBtn = document.getElementById('back-to-result-btn');
	const startBrowseBtn = document.getElementById('start-browse-btn');

    const questionTitle = document.getElementById('question-title');
    const optionList = document.getElementById('option-list');
    const progressBar = document.getElementById('progress-bar');
    const questionCounter = document.getElementById('question-counter');
    const animalGuide = document.getElementById('animal-guide');
    const resultAnimal = document.getElementById('result-animal');
    const resultDescription = document.getElementById('result-description');

    const dimensionKeys = ["DOM", "STR", "COM", "SOL", "AGI", "SEC", "AES"];

    let currentQuestionIndex = 0;
    let scores = {};
    let selectedOptions = [];
    let isProcessing = false;

    function initScores() { scores = {}; dimensionKeys.forEach(key => scores[key] = 0); }

    function initAnimalGuide() {
        animalGuide.innerHTML = '';
        Object.keys(animalArchetypes).forEach(animal => {
            const card = document.createElement('div');
            card.className = 'animal-card';
            card.innerHTML = `<h3>【 ${animal} 】</h3><p>${animalArchetypes[animal].desc}</p>`;
            animalGuide.appendChild(card);
        });
    }

    function startQuiz() {
    console.log('startQuiz called, isProcessing:', isProcessing);
    if (isProcessing) return;
    isProcessing = true;

    try {
        currentQuestionIndex = 0;
        initScores();
        selectedOptions = [];

        // 隐藏其它屏幕
        [startScreen, resultScreen, interludeScreen, animalGuideScreen, loadingScreen]
            .forEach(s => s.classList.add('hidden'));

        quizScreen.classList.remove('hidden');
        quizScreen.classList.remove('fade-out');

        // ★ 关键：切到第一题前，先渲染题目，再在短时间内屏蔽选项区域的指针事件，防止"开始测试"的手指抬起穿透到第一题选项
        showQuestion(() => {
            optionList.classList.add('pointer-guard');
            setTimeout(() => {
                optionList.classList.remove('pointer-guard');
                isProcessing = false; // 在这里重置isProcessing
            }, 350);
        });
    } catch (error) {
        console.error('Error in startQuiz:', error);
        isProcessing = false; // 确保在出错时重置isProcessing
    }
}

    function showQuestion(afterRender) {
        if (currentQuestionIndex >= quizData.length) { showResult(); return; }
		// ★ 新增：进入新题时解锁并确保容器可用
        optionList.dataset.locked = '0';
		optionList.classList.remove('pointer-guard');
        const currentQuestion = quizData[currentQuestionIndex];
        questionTitle.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
        questionCounter.textContent = `${currentQuestionIndex + 1}/${quizData.length}`;
        backBtn.style.visibility = currentQuestionIndex > 0 ? 'visible' : 'hidden';

        optionList.innerHTML = '';
		['A', 'B', 'C', 'D'].forEach(key => {
		    if (currentQuestion.options[key]) {
		        const li = document.createElement('li');
		        li.className = 'option-item';
		        if (selectedOptions[currentQuestionIndex] === key) li.classList.add('selected');
		        li.innerHTML = `<span class="option-prefix">${key}</span><span class="option-text">${currentQuestion.options[key]}</span>`;
		        onTap(li, () => selectOption(key, li));
		        optionList.appendChild(li);
		    }
		});

        updateProgressBar();
        if (typeof afterRender === 'function') afterRender();
    }

    function updateProgressBar() {
        const progress = (currentQuestionIndex / quizData.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    function selectOption(optionKey, element) {
		// ★ 题目级锁：同一题只接受第一次有效点击/触控
	    if (optionList.dataset.locked === '1') return;
	    optionList.dataset.locked = '1';
        if (isProcessing) return;
        isProcessing = true;
        selectedOptions[currentQuestionIndex] = optionKey;
        document.querySelectorAll('.option-item').forEach(item => item.classList.remove('selected'));
        element.classList.add('selected');
        optionList.classList.add('pointer-guard');
        setTimeout(() => {
            quizScreen.classList.add('fade-out');

            setTimeout(() => {
            currentQuestionIndex++;
            quizScreen.classList.remove('fade-out');
            showQuestion(() => {
                setTimeout(() => {
                optionList.classList.remove('pointer-guard');
                }, 300);
            });

            isProcessing = false;
            }, 600);
        }, 350);
        }

    function goBack() {
        if (isProcessing || currentQuestionIndex <= 0) return;
        isProcessing = true;

        quizScreen.classList.add('fade-out');
        setTimeout(() => {
            currentQuestionIndex--;
            quizScreen.classList.remove('fade-out');
            showQuestion();
            isProcessing = false;
        }, 600);
    }

    // 图鉴入口来源记录（原样）
    let guideOrigin = 'result';
    function showAllAnimals(origin = 'result') {
        guideOrigin = origin;
        startScreen.classList.add('hidden');
        resultScreen.classList.add('hidden');
        backToResultBtn.textContent = origin === 'start' ? '← 返回首页' : '← 返回结果';
        animalGuideScreen.classList.remove('hidden');
    }
    function backToResult() {
        animalGuideScreen.classList.add('hidden');
        if (guideOrigin === 'start') startScreen.classList.remove('hidden');
        else resultScreen.classList.remove('hidden');
    }

    function showResult() {
        quizScreen.classList.add('hidden');
        loadingScreen.classList.remove('hidden');

        setTimeout(() => {
            // 重算总分
            initScores();
            for (let i = 0; i < selectedOptions.length; i++) {
                const option = selectedOptions[i];
                if (option) {
                    const questionScores = scoreMap[i][option];
                    for (const dim in questionScores) scores[dim] += questionScores[dim];
                }
            }

            // 归一化
            const userTotalScore = dimensionKeys.reduce((sum, key) => sum + scores[key], 0);
            const normalizedScores = {};
            if (userTotalScore === 0) dimensionKeys.forEach(key => normalizedScores[key] = 0);
            else dimensionKeys.forEach(key => normalizedScores[key] = (scores[key] / userTotalScore) * ANIMAL_ARCHETYPE_TOTAL);

            // 匹配最接近的动物
            let bestMatchAnimal = '水豚';
            let minDifference = Infinity;
            Object.keys(animalArchetypes).forEach(animalName => {
                const animalVector = animalArchetypes[animalName].vector;
                let diffSum = 0;
                dimensionKeys.forEach(key => {
                    const diff = (normalizedScores[key] || 0) - (animalVector[key] || 0);
                    diffSum += diff * diff;
                });
                if (diffSum < minDifference) { minDifference = diffSum; bestMatchAnimal = animalName; }
            });

            const resultData = animalArchetypes[bestMatchAnimal];
            resultAnimal.textContent = `【 ${bestMatchAnimal} 】`;
            resultDescription.textContent = resultData.desc;

            loadingScreen.classList.add('hidden');
            resultScreen.classList.remove('hidden');
            isProcessing = false;
        }, 1500);
    }

	// 统一 Tap：无额外锁，靠轻量阈值 + preventDefault 防幽灵点击
	function onTap(el, handler) {
	    try { el.style.touchAction = 'manipulation'; } catch (e) {}
	
	    let startX = 0, startY = 0, startTime = 0;
	    const MOVE_TOL = 10;     // 允许的指针位移（像素）
	    const TIME_TOL = 500;    // 认为是一次 Tap 的最长按压时间（毫秒）
	    const hasPointer = !!window.PointerEvent;
	    if (hasPointer) {
	        el.addEventListener('pointerdown', (e) => {
	            if (!e.isPrimary) return;
	            startX = e.clientX;
	            startY = e.clientY;
	            startTime = e.timeStamp || performance.now();
	            try { el.setPointerCapture(e.pointerId); } catch (err) {}
	        }, { passive: true });
	
	        el.addEventListener('pointerup', (e) => {
	            if (!e.isPrimary) return;
	
	            const dt = (e.timeStamp || performance.now()) - startTime;
	            const dx = e.clientX - startX;
	            const dy = e.clientY - startY;
	            const moved = (dx*dx + dy*dy) > (MOVE_TOL*MOVE_TOL);
	
	            if (dt <= TIME_TOL && !moved) {
	                e.preventDefault();
	                e.stopPropagation();
	                handler(e);
	            }
	
	            try { el.releasePointerCapture(e.pointerId); } catch (err) {}
	        }, { passive: false });
	
	        el.addEventListener('click', (e) => {
	            e.preventDefault();
	            e.stopPropagation();
	        }, { capture: true, passive: false });
	
	    } else {
	        el.addEventListener('click', (e) => {
	            e.preventDefault();
	            handler(e);
	        }, { passive: false });
	    }
	}

    onTap(startBtn, startQuiz);
    onTap(restartBtn, startQuiz);
    onTap(backBtn, goBack);
    onTap(browseBtn, () => showAllAnimals('result'));
    onTap(startBrowseBtn, () => showAllAnimals('start'));
    onTap(backToResultBtn, backToResult);

    document.addEventListener('DOMContentLoaded', () => {
    initScores();
    initAnimalGuide();
    document.getElementById('quiz-container').style.transform = 'perspective(1000px) rotateX(0deg)';

    // iOS 字体微调（原逻辑保留）
    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
        document.documentElement.style.fontSize = '16px';
        
        // 添加iOS特定的事件处理
        document.addEventListener('touchstart', function() {}, { passive: true });
    }
});
