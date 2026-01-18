const siteConfig = {
  "title": "抖音小游戏导航 - 纯游戏合集",
  "description": "收录抖音/短视频平台热门H5小游戏合集，按类型细分分类，支持搜索与一键直达。为大家带来超级多抖音无广告游戏合集，有趣的小游戏等你来发现！",
  "keywords": "抖音小游戏,小游戏导航,H5游戏,消除,修仙,跑酷,赛车,麻将,解压",
  "sidebarHeader": {
    "title": "抖音游戏导航",
    "description": "无广抖音小游戏"
  },
  "copyright": "Powered by 茉灵智库✨",
  "styleConfig": {
    "showLogo": true,
    "showSubCategoryIcons": true,
    "nav_card_columns": 4,
    "stickySearchBox": true
  }
};

// 类目图标配置（使用 Lucide 图标）
const categoryIcons = {
  '休闲益智': 'sparkles',
  '动作射击': 'crosshair',
  '策略塔防': 'shield',
  '模拟经营': 'store',
  '文字游戏': 'type',
  '竞速驾驶': 'car',
  '角色扮演': 'swords',
  '棋牌桌游': 'dice-5'
};

// 二级导航配置（嵌套结构，与navData结构保持一致）
const subCategoryIcons = {
  '休闲益智': {
    '消除合成': 'grid-2x2',
    '找茬解谜': 'search-check',
    '解压收纳': 'package',
    '跑酷闯关': 'footprints',
    '综合': 'grid-3x3'
  },
  '动作射击': {
    '射击狙击': 'target',
    '割草生存': 'swords',
    '综合': 'grid-3x3'
  },
  '策略塔防': {
    '塔防守城': 'shield',
    'SLG策略': 'castle',
    '综合': 'grid-3x3'
  },
  '模拟经营': {
    '餐厅小店': 'utensils',
    '城市建造': 'building-2',
    '逆袭人生': 'trending-up',
    '综合': 'grid-3x3'
  },
  '文字游戏': {
    '汉字梗图': 'type',
    '找茬解谜': 'search-check',
    '综合': 'grid-3x3'
  },
  '竞速驾驶': {
    '赛车竞速': 'car',
    '停车驾驶': 'parking-circle',
    '综合': 'grid-3x3'
  },
  '角色扮演': {
    '仙侠修真': 'sparkles',
    '冒险闯关': 'footprints',
    '综合': 'grid-3x3'
  },
  '棋牌桌游': {
    '麻将棋牌': 'dice-5',
    '象棋围棋': 'crown',
    '综合': 'grid-3x3'
  }
};

let navData = {
  '休闲益智': {
    '综合': [
      {
        'title': '武神是刷出来的/我真不是老六/顶级开局',
        'desc': '',
        'url': 'https://spwinner.cdn.xiaojing.work/dy_wo_zhen_bu_shi_lao_liu/mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '武神是刷出来的/我真不是老六/顶级开局 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '机智火柴人（密码在文档右侧）',
        'desc': '',
        'url': 'https://si.ali.landintheair.com/gamepass.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '机智火柴人（密码在文档右侧） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '无敌小英雄',
        'desc': '激活码：b7q9k3',
        'url': 'https://www.quduoduodata.top/ossfile/ShangWu/LittleHero1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '无敌小英雄 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '纸片大混战密码文档',
        'desc': '密码点击下方链接查看',
        'url': 'https://docs.qq.com/smartsheet/DU1JuaVdyRXBybkRw?nlc=1&tab=tGwetx&viewId=vq3gb2',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '纸片大混战密码文档 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '地牢层层破/小小生存高手',
        'desc': '',
        'url': 'https://api.moeu.cc/h5/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '地牢层层破/小小生存高手 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '无限大对决/无限特攻队游戏手机版',
        'desc': '',
        'url': 'https://cdn-xyx-fire.raink.com.cn/9046/gear-war/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '无限大对决/无限特攻队游戏手机版 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '无限大对决/无限特攻队游戏网页版',
        'desc': '',
        'url': 'https://cdn-xyx-fire.raink.com.cn/9046/gear-war/web-desktop/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '无限大对决/无限特攻队游戏网页版 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我闯关超牛（登录账号随便填都可以登录）',
        'desc': '',
        'url': 'https://wcgcnmanager.fkings.cn/wcgcnH5/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我闯关超牛（登录账号随便填都可以登录） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开挂的木鱼',
        'desc': '',
        'url': 'https://gamecdn.xzwgameserver.host/woodenFish2/web/start/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开挂的木鱼 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '卷不过我吧',
        'desc': '',
        'url': 'http://cdn.flysheeep.com/noadgame/YarnSort/003/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '卷不过我吧 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '帝王成长之路（找个v好友发过去点链接。别用浏览器 浏览器不行）',
        'desc': '',
        'url': 'https://demo2.9999le.com/topking/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '帝王成长之路（找个v好友发过去点链接。别用浏览器 浏览器不行） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '重生干帝王/帝王创业记',
        'desc': '',
        'url': 'https://demo2.9999le.com/huangdidhiuu/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '重生干帝王/帝王创业记 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '一守到底/纸上生存战',
        'desc': '',
        'url': 'https://game2.sfplay.net/LogLord/v1.0.1/v3_keyBoradVersion/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '一守到底/纸上生存战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '你是真老六',
        'desc': '',
        'url': 'https://bzres.yigomob.com/noad/NiShiLao6/3.0.10/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '你是真老六 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '美食卖出五套房',
        'desc': '',
        'url': 'https://minigame.test.joyelement.cn/h5/minigame/CakeMatch/H5/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '美食卖出五套房 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '解压你最6',
        'desc': '',
        'url': 'https://www.yanxingwl.cn/webtest/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '解压你最6 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '齿轮前线/玩过已老实/你行就来玩',
        'desc': '',
        'url': 'https://aliyun.umgame.cn/minigame_preview/10914/1.0.0/gear-web-clqx/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '齿轮前线/玩过已老实/你行就来玩 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超难大挑战/玩了个毛线/玩个儿毛线/动脑我最强版本一',
        'desc': '',
        'url': 'https://res.wqop2018.com/cp/tt_wzwz/001_h5daren/rope1.0.0/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超难大挑战/玩了个毛线/玩个儿毛线/动脑我最强版本一 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超难大挑战/玩了个毛线/玩个儿毛线/动脑我最强',
        'desc': '',
        'url': 'https://res.wqop2018.com/H5/tt_cndtz/daren/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超难大挑战/玩了个毛线/玩个儿毛线/动脑我最强 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '迷你生存/巨人杀手',
        'desc': '',
        'url': 'https://a.unity.cn/client_api/v1/buckets/4486bcf0-4915-4b28-8292-df512aa3a7fb/release_by_badge/publish/content/web_youwo.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '迷你生存/巨人杀手 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '经典乐消除（水果方块）',
        'desc': '',
        'url': 'https://web.mj.shanhaicl.com/webview/jdlxc/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '经典乐消除（水果方块） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '经典乐消除（纯色方块）',
        'desc': '',
        'url': 'https://www.yyqyueyouqu.cn/yueyouqu/alxc_h5_1.3.9/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '经典乐消除（纯色方块） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '阿姨手别抖',
        'desc': '',
        'url': 'https://game.vsane.com/live/dontshakelive',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '阿姨手别抖 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '动物方舟',
        'desc': '',
        'url': 'https://2025.niudu.com/hideAndSeek/dwfz/tt-0620-2/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '动物方舟 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '大丰收自动版',
        'desc': '',
        'url': 'https://game.vsane.com/live/bigharvestauto',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '大丰收自动版 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '大丰收无广告版',
        'desc': '',
        'url': 'https://game.vsane.com/live/bigharvestmanu',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '大丰收无广告版 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '来发育呀/共同守卫者',
        'desc': '',
        'url': 'https://res.wqop2018.com/partner/njym/lfyy/mgbbweb/1.0.2/web-desktop/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '来发育呀/共同守卫者 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '梦幻美食记/开了间火锅店',
        'desc': '',
        'url': 'https://cdn.moblazer.com/HuoGuo/web/web0/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '梦幻美食记/开了间火锅店 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '穿串串',
        'desc': '',
        'url': 'https://game.vsane.com/live/skemanu/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '穿串串 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消除大挑战',
        'desc': '',
        'url': 'https://seeg-minigame-preview-3add3caa90-1307405015.tcloudbaseapp.com/mxccc/H5TT/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消除大挑战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '智商好离谱',
        'desc': '',
        'url': 'https://cpgame-1259238728.file.myqcloud.com/zshlp/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '智商好离谱 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '合成小子',
        'desc': '',
        'url': 'https://beibaodz.qi-guo.cn',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '合成小子 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '会提示密码不对 刷新下就好了',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/bagfight-bagfightcdn/dlgljh/dragon/web-mobile/index.html?_t=1748573361861',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '会提示密码不对 刷新下就好了 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '全民泡泡闯关（积木）',
        'desc': '',
        'url': 'https://h5.xiaoyouxi.co/xxtt/h5/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '全民泡泡闯关（积木） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '转刀大佬/合成飞刀转/疯狂飞刀传',
        'desc': '',
        'url': 'http://obsview.zywxgames.com/new-resources/Users/Fan/Wzr/web/zddltt/3/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '转刀大佬/合成飞刀转/疯狂飞刀传 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '筑梦空间',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/28020/Web/1.0.8/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '筑梦空间 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '筑梦空间',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/28020/Web/1.0.7/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '筑梦空间 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '锤锤出击（直接点登录即可）',
        'desc': '',
        'url': 'https://sg-huanyz.gamelivesky.com/webSnake/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '锤锤出击（直接点登录即可） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '闯关我最行',
        'desc': '',
        'url': 'https://xjtf.glifegame.com/web_cgwzx/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '闯关我最行 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '风沙之后（密码就在文档右侧）',
        'desc': '',
        'url': 'https://si.ali.landintheair.com/list.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '风沙之后（密码就在文档右侧） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '炸弹进化（密码就在文档右侧）',
        'desc': '',
        'url': 'https://si.ali.landintheair.com/list.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '炸弹进化（密码就在文档右侧） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '冬季运动会/滚个雪球',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/285_1747366212927/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '冬季运动会/滚个雪球 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '节奏盒子超级版',
        'desc': '',
        'url': 'https://hncygame.hainanyhkj.com/WebGame/JZHZ_FK/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '节奏盒子超级版 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '挑战十亿关',
        'desc': '',
        'url': 'http://obsview.zywxgames.com/new-resources/Users/Jlong/ZW/20250603/web/lProp/tzsyg/02/028eADGOUdC6MqGXwp/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '挑战十亿关 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '逗趣大作战',
        'desc': '',
        'url': 'https://h5.zckcloud.com/crash-attack3x11/crash.html?v=1.0.0',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '逗趣大作战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '节奏盒子彩蛋',
        'desc': '',
        'url': 'http://obsview.zywxgames.com/new-resources/Users/Jlong/ZW/2025522/web/yProp/jzhzcd/02/024xPwDTq4CvBkaaYU/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '节奏盒子彩蛋 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '狗狗肿么了',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.net/wb_webview/savethedoge/h5/index.html?fdfd',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '狗狗肿么了 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '最强大脑达人',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.net/wb_webview/record-assets-h5/zqddnh5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '最强大脑达人 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '难度再飙升',
        'desc': '',
        'url': 'https://cdn-404.huanyz.com/X9_waistcoat/CDN/WebGL/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '难度再飙升 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消除不能停',
        'desc': '',
        'url': 'https://2025.niudu.com/PinOutLuosi/web-xcbnt/1.0.0/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消除不能停 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我是整活天才/电玩赢家抽象版',
        'desc': '',
        'url': 'https://2025.niudu.com/main/web-wszhtc.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我是整活天才/电玩赢家抽象版 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '配对消消消',
        'desc': '',
        'url': 'https://games.cdn.dianli100.com/mj/web/1.0.1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '配对消消消 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '不可能的挑战',
        'desc': '',
        'url': 'https://debug.pumpkinheadgame.online/CrossRoad_Phone/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '不可能的挑战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这关太离谱',
        'desc': '',
        'url': 'https://res.wqop2018.com/partner/cssh/h5/yarn3d/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这关太离谱 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '贪吃蛇神龙版/召唤神龙进化',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/009_1749204614623/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '贪吃蛇神龙版/召唤神龙进化 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开局即通关',
        'desc': '',
        'url': 'https://bikerush.youyee.com/bike_rush/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开局即通关 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '神灵崛起',
        'desc': '',
        'url': 'https://sxres.xhhycd.com/IAA/CDN/h5/dytzj/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '神灵崛起 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我不想受欢迎',
        'desc': '',
        'url': 'https://hncygame.hainanyhkj.com/WebGame/Tangping/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我不想受欢迎 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这谁顶得住',
        'desc': '',
        'url': 'https://jzxcdn.jzxgame.com/jzxhy_wzyx/_jzx/zsddz/web/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这谁顶得住 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消螺丝',
        'desc': '',
        'url': 'https://html-1318206992.cos.ap-shanghai.myqcloud.com/xuhaitian/ScrewModelAndBus_TT/tt9c1feaa2032978c807/webgl/6.10/2/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消螺丝 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '老司机开车',
        'desc': '',
        'url': 'http://xcx.youletd.com/file/h5/fxmn/v102/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '老司机开车 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '跑了个羊',
        'desc': '',
        'url': 'https://cdn.minigames.epaymob.com/sheep_running/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '跑了个羊 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '耍的害挺好',
        'desc': '',
        'url': 'https://game.sfplay.net/ps/BattleNowGN_NoAds/V20/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '耍的害挺好 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '太空滚动球球',
        'desc': '',
        'url': 'https://xcx.youletd.com/test/web/tkqq/v1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '太空滚动球球 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '水上球球酷跑',
        'desc': '',
        'url': 'https://xcx.youletd.com/test/web/waterBall/v101/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '水上球球酷跑 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我等的好急',
        'desc': '',
        'url': 'https://herofight.cn/preview/web/HurryUpMobile',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我等的好急 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开心挪挪车/闯关挪挪车',
        'desc': '',
        'url': 'https://idata.igame58.com/h5/KXNNC/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开心挪挪车/闯关挪挪车 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '坚守这座城',
        'desc': '',
        'url': 'https://h5.xiaoyouxi.co/bagchess/h5/250314/web-mobile-001/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '坚守这座城 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '猫猫挤一挤',
        'desc': '',
        'url': 'http://obsview.zywxgames.com/new-resources/Users/Fan/Szh/202506/web/mmjyj/4/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '猫猫挤一挤 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我靠炒粉成神',
        'desc': '',
        'url': 'https://cdn-corp-backup.cygame666.cn/chaoFenNiXi/client/web/web-mobile3/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我靠炒粉成神 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我的保卫战/我的大比拼/尸潮战车/超级大比拼',
        'desc': '',
        'url': 'https://tos.qwpo2018.com/mp/game/web/gm/aa0be7829b5322d0fac213008c412eb9/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我的保卫战/我的大比拼/尸潮战车/超级大比拼 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我爱拔螺丝',
        'desc': '',
        'url': 'http://res.wqop2018.com/partner/lytc/wabls/webgl/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我爱拔螺丝 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '森林动物模拟',
        'desc': '',
        'url': 'https://qtweb.qtjoy.com/externalWeb/ZY/PiggyRescue_YangYangZhu_Cocos3D/20250523/1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '森林动物模拟 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这还玩个毛线',
        'desc': '',
        'url': 'https://cdn.hiluluke.com/noad/maoxian/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这还玩个毛线 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '欢乐解压宝盒',
        'desc': '',
        'url': 'http://xcx.youletd.com/file/h5/hljybh/v100/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '欢乐解压宝盒 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '儿时回忆',
        'desc': '',
        'url': 'https://brainchildhoodai.ifireflygame.com/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '儿时回忆 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '生存60秒',
        'desc': '',
        'url': 'https://cooperation.pailedi.com/web2/wanglei/SC60S/Web/v1.0.1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '生存60秒 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '改造高高手',
        'desc': '',
        'url': 'https://game2.sfplay.net/GearsLand_MountainSea/v6/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '改造高高手 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '恐龙进化/自由恐龙世界',
        'desc': '',
        'url': 'https://h5.xiaoyouxi.co/dinoking/daren/?hide_nav_bar=0&disable_auto_expose=1&enable_webview_select_search=1&need_out_animation=right&font_scale=1.15',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '恐龙进化/自由恐龙世界 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '看谁能打过（两个链接两个游戏）密码都是（5678）提示不对 刷新浏览器 就行了',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/bagfight-bagfightcdn/dlgljh/dragon/web-mobile/index.html?_t=1748573361861',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '看谁能打过（两个链接两个游戏）密码都是（5678）提示不对 刷新浏览器 就行了 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '看谁能打过（两个链接两个游戏）密码都是（5678）提示不对 刷新浏览器 就行了',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/bagfight-bagfightcdn/tjsj/dragonmaster/web-mobile/index.html?_t=1739257156541',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '看谁能打过（两个链接两个游戏）密码都是（5678）提示不对 刷新浏览器 就行了 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开局破防了/重返1998/最强败家子/咸鱼要翻身',
        'desc': '',
        'url': 'https://dycdn-1256464321.cos.ap-guangzhou.myqcloud.com/fccsl/h5_kjpfl/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开局破防了/重返1998/最强败家子/咸鱼要翻身 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '喵喵乐',
        'desc': '',
        'url': 'https://www.nuanyou8.cn/mml/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '喵喵乐 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '一起打丧尸（等2-4分钟 游戏才可以打开）',
        'desc': '',
        'url': 'https://beibaodz.qi-guo.cn',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '一起打丧尸（等2-4分钟 游戏才可以打开） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '手指不太灵/一起找找吖',
        'desc': '',
        'url': 'https://game.csquyou.com/WaterSortGamelive/?v=',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '手指不太灵/一起找找吖 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超级大乱斗（木头人）',
        'desc': '',
        'url': 'https://aliyun.umgame.cn/minigame_preview/10013/web/webgl5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超级大乱斗（木头人） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超级大乱斗（小兵）',
        'desc': '',
        'url': 'https://cos.umgame.cn/minigame_preview/10592/0.4.290/build/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超级大乱斗（小兵） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我在阴间当差',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/289_1749786881595/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我在阴间当差 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我要爆装备/全都别想跑/开局一堆宠',
        'desc': '',
        'url': 'https://cdn.moblazer.com/baozhuangbei/web-test/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我要爆装备/全都别想跑/开局一堆宠 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我就是卷王',
        'desc': '',
        'url': 'http://cdn.flysheeep.com/noadgame/YarnSort/002/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我就是卷王 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '抖个大机灵',
        'desc': '',
        'url': 'https://cdn-corp-backup.cygame666.cn/brainHoleL2/client/web/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '抖个大机灵 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '无敌消除王',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/guohao/WaterSort/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '无敌消除王 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '无敌小小队',
        'desc': '',
        'url': 'https://game2.sfplay.net/WasteLand/1.0.0/v5/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '无敌小小队 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '梦幻恐龙岛/恐龙考古家',
        'desc': '',
        'url': 'https://qtweb.qtjoy.com/games/bianyilong/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '梦幻恐龙岛/恐龙考古家 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我养你阿',
        'desc': '',
        'url': 'https://cdn.hanyougame.cn/YangniGame/dgmnq/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我养你阿 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我的寿司酒吧说明文档',
        'desc': '',
        'url': 'https://si936hv5fdy.feishu.cn/docx/QT16dFjdBo9UbOxPGZIcFjYLnxg',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我的寿司酒吧说明文档 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开局一条狗',
        'desc': '',
        'url': 'https://game2.sfplay.net/kjytg/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开局一条狗 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '玩了个锤子',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.net/wb_webview/myDog/playHammer/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '玩了个锤子 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '搓澡之王',
        'desc': '',
        'url': 'http://d.glf2ym.cn/r7HHPi',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '搓澡之王 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '暴富一刻',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/28010/web/1.0.0/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '暴富一刻 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '疯狂商业街',
        'desc': '',
        'url': 'https://game2.sfplay.net/CounterattackDiary/v1',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '疯狂商业街 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '帮助姐姐当女帝',
        'desc': '',
        'url': 'https://oss.zhejing.tech/webH5/zhenhuan-tiktok/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '帮助姐姐当女帝 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '救救这只猪',
        'desc': '',
        'url': 'http://d.glf2ym.cn/wkaCK4',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '救救这只猪 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '沉浸式生活/不败之王',
        'desc': '',
        'url': 'http://d.glf2ym.cn/pfHA8i',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '沉浸式生活/不败之王 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '恐怖屠夫',
        'desc': '',
        'url': 'https://static-cdn.zhouhy.net/h5/project/qingdu/web/laitangpingba/2/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '恐怖屠夫 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '植物变异大招版',
        'desc': '',
        'url': 'https://game2.sfplay.net/mutant_plants/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '植物变异大招版 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '贱走偏风',
        'desc': '',
        'url': 'https://oppomini.eqmobi.com/wt63/jianzoupianfeng/web/version103/web3/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '贱走偏风 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '贱走偏风',
        'desc': '',
        'url': 'https://oppomini.eqmobi.com/wt63/jianzoupianfeng/web/version103/web2/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '贱走偏风 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '想致富先修路',
        'desc': '',
        'url': 'https://game2.sfplay.net/PlantTrees/v1/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '想致富先修路 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '来躺平呀',
        'desc': '',
        'url': 'https://renyousome.renyouwangluo.cn/remoteGame/ry_ltpy/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '来躺平呀 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '再创辉煌',
        'desc': '',
        'url': 'https://cdn.doflame.com.cn/NewFutureYou/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '再创辉煌 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '梦幻女团',
        'desc': '',
        'url': 'https://rescdn.gamejym.com/szsh/zj_ewft1/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '梦幻女团 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这波我很秀',
        'desc': '',
        'url': 'https://cdngame.shuling.vip/BianJuDaShi/ZheBoWoHenXiu/h5/web-mobile/index.html?1.0.14',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这波我很秀 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小小挖矿记',
        'desc': '',
        'url': 'https://game2.sfplay.net/minng3d/v1/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小小挖矿记 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '猫咪前哨战',
        'desc': '',
        'url': 'https://game2.sfplay.net/CatSentinelForeign/v1',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '猫咪前哨战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我的煎饼摊',
        'desc': '',
        'url': 'https://webgame-6gzwg8ti52e46012-1310209978.tcloudbaseapp.com/107/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我的煎饼摊 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '梦幻都市',
        'desc': '',
        'url': 'https://oss.tobetopone.com/h5/dream_city/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '梦幻都市 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '彩色世界',
        'desc': '',
        'url': 'https://cdn.cdwaterbear.cn/Storyteller/web/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '彩色世界 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我靠钓鱼买座岛/我不是吃素的',
        'desc': '',
        'url': 'https://static.game.jingyougz.com/fishisland_h5/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我靠钓鱼买座岛/我不是吃素的 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '养鸡日记',
        'desc': '',
        'url': 'https://ylgjcdn.xyx.mmhygame.com/ylgj/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '养鸡日记 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我要养女儿',
        'desc': '',
        'url': 'https://www.lekonghd.cn/wyynr/2.0.6/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我要养女儿 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超级解压馆',
        'desc': '',
        'url': 'https://res.kampfiregames.cn/coinSort/web6/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超级解压馆 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '就要飞跃',
        'desc': '',
        'url': 'https://cdn.cdwaterbear.cn/SimulationGame_Web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '就要飞跃 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '遇事不要慌',
        'desc': '',
        'url': 'https://shifeng-minigame.chuanglinggame.com/trdsd/H5/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '遇事不要慌 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '王牌老司机',
        'desc': '',
        'url': 'https://game-res.tos-cn-beijing.volces.com/qi-huan/wplsj-daren/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '王牌老司机 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开局一把刀',
        'desc': '',
        'url': 'https://security.feishu.cn/link/safety?target=https%3A%2F%2Fgame2.sfplay.net%2Fknife%2F&scene=ccm&logParams=%7B%22location%22%3A%22ccm_default%22%7D&lang=zh-CN',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开局一把刀 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '摆烂吧老铁游戏竖版',
        'desc': '',
        'url': 'https://blblt-daren-shu-1317024912.cos.ap-guangzhou.myqcloud.com/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '摆烂吧老铁游戏竖版 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '摆烂吧老铁游戏横版',
        'desc': '',
        'url': 'https://gwzw-heng-daren-1317024912.cos.ap-guangzhou.myqcloud.com/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '摆烂吧老铁游戏横版 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '疯狂打螺丝',
        'desc': '',
        'url': 'http://www.chengmei.games/daluosi/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '疯狂打螺丝 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '怪谈研究所',
        'desc': '',
        'url': 'https://guiwuzhe-1257957916.file.myqcloud.com/strangeTalk/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '怪谈研究所 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '马桶怪物',
        'desc': '',
        'url': 'https://res.heigame.com/webRes/MonsterHunterBV1.0.2/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '马桶怪物 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '收纳物语',
        'desc': '',
        'url': 'https://cdn.hanyougame.cn/snwy_web_1.0.1/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '收纳物语 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '海底猎杀进化',
        'desc': '',
        'url': 'https://game2.sfplay.net/shby/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '海底猎杀进化 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '给娘娘请安',
        'desc': '',
        'url': 'https://daren.glifegame.com/hggl/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '给娘娘请安 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这是解谜吗',
        'desc': '',
        'url': 'https://tos.zaml2018.com/index.html?app=gm_7fefb8165695e3d436a9cb1cc59a5c21',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这是解谜吗 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '美食叠叠乐游戏网页版',
        'desc': '',
        'url': 'https://res.wqop2018.com/cp/tt_msddl/h5/v2/web/web-desktop/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '美食叠叠乐游戏网页版 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '美食叠叠乐游戏手机版',
        'desc': '',
        'url': 'https://res.wqop2018.com/cp/tt_msddl/h5/v2/mobile/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '美食叠叠乐游戏手机版 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '烧脑大乱斗',
        'desc': '',
        'url': 'https://short.puzzles100.com/sl/OMDFok',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '烧脑大乱斗 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这次我很强',
        'desc': '',
        'url': 'https://res.heigame.com/webRes/MonsterHunterV1.1.0/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这次我很强 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '哪里不对劲说明文档',
        'desc': '',
        'url': 'https://si936hv5fdy.feishu.cn/docx/SStWdbf5goSUryxZ9fEcQThRnbd',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '哪里不对劲说明文档 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '喵喵爱吃瓜',
        'desc': '',
        'url': 'http://112.74.33.201:8080/tcs2/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '喵喵爱吃瓜 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '建造英雄',
        'desc': '',
        'url': 'https://cdn.moblazer.com/BuildHeros/web-gm7/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '建造英雄 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '最强打工王',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/28013/darenshow/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '最强打工王 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超能整活',
        'desc': '',
        'url': 'https://changshazhise01-1254961065.cos.ap-guangzhou.myqcloud.com/zhise/cnzh/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超能整活 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '疯狂的老板',
        'desc': '',
        'url': 'https://oss.zhejing.tech/webH5/career-tiktok/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '疯狂的老板 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '村口过庙会',
        'desc': '',
        'url': 'https://security.feishu.cn/link/safety?target=https%3A%2F%2Fres.sjzgxwl.com%2Fpingce%2FGuangYiGuangMiaoHui%2Findex.html&scene=ccm&logParams=%7B%22location%22%3A%22ccm_default%22%7D&lang=zh-CN',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '村口过庙会 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我要当帝皇',
        'desc': '',
        'url': 'https://game-res.tos-cn-beijing.volces.com/remote-res/dang-huang-di/web/1.0.1/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我要当帝皇 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '燃烧吧大脑',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/embarrassingbrain_c/h5-tt/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '燃烧吧大脑 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '养鸡日记',
        'desc': '',
        'url': 'https://ylgjcdn.xyx.mmhygame.com/ylgj/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '养鸡日记 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '阔怕的真相',
        'desc': '',
        'url': 'https://h5.wugua.com.cn/project_a_1_branch_1/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '阔怕的真相 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '挖宝大神',
        'desc': '',
        'url': 'https://renyousome.5iape.com/remoteGame/wbds_dr/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '挖宝大神 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '菜鸟消消消',
        'desc': '',
        'url': 'https://www.lekonghd.cn/cainiao/0.5.1/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '菜鸟消消消 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '就要飞跃',
        'desc': '',
        'url': 'https://cdn.cdwaterbear.cn/SimulationGame_Web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '就要飞跃 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '怪谈研究所',
        'desc': '',
        'url': 'https://guiwuzhe-1257957916.file.myqcloud.com/strangeTalk/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '怪谈研究所 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我的收纳摊',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/16003/web/1.0.110/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我的收纳摊 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '纸上发育',
        'desc': '',
        'url': 'https://antplay888.com/huochairen/1/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '纸上发育 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '艾泽拉斯小队',
        'desc': '',
        'url': 'https://game2.sfplay.net/CatSentinelHp/v1',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '艾泽拉斯小队 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '老铁来一杯',
        'desc': '',
        'url': 'https://mini.ssflashgo.com/stonesh/hh/web/newhanzi/?gamid=ltlyb&version=1709261880433',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '老铁来一杯 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '怪兽星球',
        'desc': '',
        'url': 'https://game.haiwanwl.com/gsxq_bytedance1',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '怪兽星球 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '一起造个车',
        'desc': '',
        'url': 'https://game.haiwanwl.com/yqzgc_bytedance/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '一起造个车 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '喵星神射手',
        'desc': '',
        'url': 'https://game.haiwanwl.com/gohomecat/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '喵星神射手 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消消大师2',
        'desc': '',
        'url': 'https://games.cdn.dianli100.com/mj/h5/1.0.9/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消消大师2 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '你的选择没有错',
        'desc': '',
        'url': 'https://oss.tobetopone.com/h5/xrwdrw/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '你的选择没有错 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '最强漂移大师',
        'desc': '',
        'url': 'https://aaa.puffergames.com/GameServerData/CarRushChallenge/CarRush/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '最强漂移大师 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '城市打拼记',
        'desc': '',
        'url': 'https://hscdn1.quanmin-game.com/game/CityCareer/web/202311301530/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '城市打拼记 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '烧脑闯关',
        'desc': '',
        'url': 'https://minigame.qizheplay.com/shaonao/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '烧脑闯关 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '虚拟解压馆',
        'desc': '',
        'url': 'https://mini.ssflashgo.com/wt63/VirtualDecompression/web/v101/web7/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '虚拟解压馆 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '加油小车车',
        'desc': '',
        'url': 'https://cdn.hiluluke.com/noad/xiaocheche/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '加油小车车 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '离谱的经历/赚钱走上巅峰',
        'desc': '',
        'url': 'https://mayahudong-1253544343.file.myqcloud.com/cdn/blfy_web/webnew/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '离谱的经历/赚钱走上巅峰 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '爱我者予我牢笼',
        'desc': '',
        'url': 'https://cdn-corp.cygame666.cn/xiaoShiDeTa/client/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '爱我者予我牢笼 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '乞讨赚出五套房',
        'desc': '',
        'url': 'http://h5iad.sp-card.cn/begging/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '乞讨赚出五套房 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '遇事不要慌老',
        'desc': '',
        'url': 'https://game2.sfplay.net/CareerSurvival/v02',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '遇事不要慌老 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '搞钱高手',
        'desc': '',
        'url': 'https://changshazhise01-1254961065.cos.ap-guangzhou.myqcloud.com/H5/tt_gqgs/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '搞钱高手 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '全场你最牛',
        'desc': '',
        'url': 'http://z8.tanyu.mobi/tanpaixyx/daerguang/web/1.0.6/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '全场你最牛 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超级金铲子',
        'desc': '',
        'url': 'http://h5.sm.deniulor.com/mergeminers/daren/v1.0.9/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超级金铲子 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '地下城与魔兽',
        'desc': '',
        'url': 'https://cdn17.tomato123.cn/web-mobile2/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '地下城与魔兽 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '神兽进化恐龙岛',
        'desc': '',
        'url': 'http://121.5.164.43/fish/index.html?t=202222222',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '神兽进化恐龙岛 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '雀实赢麻了',
        'desc': '',
        'url': 'https://www.lekonghd.cn/qsyml/0.1.6/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '雀实赢麻了 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '武林大厨',
        'desc': '',
        'url': 'https://file.gugudang.com/res/down/public/p_myhotel/web-mobile/lts/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '武林大厨 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '嘻帅大乱斗',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/sandbox3/tangpingmy/xstpdouyin/web-mobile/index.html?_t=1700790540287',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '嘻帅大乱斗 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '方块消除我要很多',
        'desc': '',
        'url': 'https://sgame.pkfj.xyz/xs/res/fk_dy/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '方块消除我要很多 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '沙雕出击',
        'desc': '',
        'url': 'https://qihuanmao.cdn.xiaojing.work/ShaDiaoGame/WebNoAds/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '沙雕出击 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '万宁弹球',
        'desc': '',
        'url': 'https://file.gugudang.com/res/down/public/p_tanqiu3/web-mobile/lts/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '万宁弹球 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超能整活',
        'desc': '',
        'url': 'https://changshazhise01-1254961065.cos.ap-guangzhou.myqcloud.com/zhise/cnzh/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超能整活 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '队友一败涂地',
        'desc': '',
        'url': 'https://game.haiwanwl.com/dyybtd_bytedance/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '队友一败涂地 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '科目三',
        'desc': '',
        'url': 'https://renyounew.renyouwangluo.cn/remoteGame/kemusanTTdrGame/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '科目三 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '解压炸裂',
        'desc': '',
        'url': 'https://res3.haotgame.com/cu04/static/jieyazhaliedouyin/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '解压炸裂 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '天天爱动脑',
        'desc': '',
        'url': 'http://tos.wqop2018.com/mp/game/web/gm/61cd140befe84cb817666aa7b814f851/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '天天爱动脑 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小兵快冲鸭',
        'desc': '',
        'url': 'https://candymatch-update.fjbgwl.com/web-mobile1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小兵快冲鸭 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我为节奏狂',
        'desc': '',
        'url': 'https://renyousome.renyouwangluo.cn/remoteGame/wwjzk/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我为节奏狂 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '整个活吧',
        'desc': '',
        'url': 'https://qihuanmao.cdn.xiaojing.work/ZhengHuoGame/H5Ads/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '整个活吧 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '又菜又爱玩',
        'desc': '',
        'url': 'https://candymatch-update.fjbgwl.com/nuoduiduiweb/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '又菜又爱玩 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '火眼惊睛',
        'desc': '',
        'url': 'https://www.lekonghd.cn/hyjj/2.7.3/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '火眼惊睛 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '全民打工人',
        'desc': '',
        'url': 'https://cdn.moblazer.com/Office/web2/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '全民打工人 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '打螺丝达人',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/noadgame/Screw2D/240524_1/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '打螺丝达人 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '看不见的真相',
        'desc': '',
        'url': 'https://kbjzx-byte-1317242322.cos.ap-guangzhou.myqcloud.com/webgl/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '看不见的真相 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '同福小吃街',
        'desc': '',
        'url': 'https://game2.sfplay.net/TFFoodCourt/v1',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '同福小吃街 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '破屋取暖模拟',
        'desc': '',
        'url': 'https://wanbgame.com/game/webapp/poWuQuNuanMoNi/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '破屋取暖模拟 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '猫咪村庄',
        'desc': '',
        'url': 'https://lyngames-1302407170.cos.ap-guangzhou.myqcloud.com/shenhe/MMCZ/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '猫咪村庄 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '植物守卫战',
        'desc': '',
        'url': 'https://game2.sfplay.net/CatSentinelHP/PVZ/v1',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '植物守卫战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '货物柜消一消',
        'desc': '',
        'url': 'https://renyousome.renyouwangluo.cn/remoteGame/hwgxyx2/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '货物柜消一消 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '进击的数字',
        'desc': '',
        'url': 'https://antplay888.com/NumRunning/6/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '进击的数字 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我的纸飞机',
        'desc': '',
        'url': 'https://renyounew.renyouwangluo.cn/remoteGame/zfj_BetaTest/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我的纸飞机 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这鱼塘我包了',
        'desc': '',
        'url': 'https://wenshi-static.game.jingyougz.com/minigame/h5/pond/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这鱼塘我包了 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '逻辑满分',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/247_1699437428748/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '逻辑满分 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '怨种日常',
        'desc': '',
        'url': 'https://renyousome.renyouwangluo.cn/remoteGame/yzrc_test/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '怨种日常 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '凑十大战',
        'desc': '',
        'url': 'https://www.xcxvs.com/minigame/coushi/web-desktop/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '凑十大战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '凑十大战',
        'desc': '',
        'url': 'https://www.xcxvs.com/minigame/coushi/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '凑十大战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '上学威龙',
        'desc': '',
        'url': 'https://renyounew.renyouwangluo.cn/remoteGame/sxwl_tt/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '上学威龙 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开局托儿所',
        'desc': '',
        'url': 'https://incubator-static.easygame2021.com/eat-grass-game/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开局托儿所 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '烧脑瓶子',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.net/wb_webview/shaonaogame/h5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '烧脑瓶子 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '当食神有多好',
        'desc': '',
        'url': 'https://wydss-byte-tuyue-1317242322.cos.ap-guangzhou.myqcloud.com/dssydh/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '当食神有多好 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '橡皮火柴人',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/matchStickMan/rubber_matchstick_man/h5_daren/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '橡皮火柴人 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '画线火柴人',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/matchStickMan/h5_daren/web-mobile/index.html?a=454455568786',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '画线火柴人 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '图文世界',
        'desc': '',
        'url': 'https://oss.tobetopone.com/h5/twsj_test/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '图文世界 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '肥鸡跳跳',
        'desc': '',
        'url': 'https://www.wesane.com/game/2071/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '肥鸡跳跳 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '愤怒的黄瓜',
        'desc': '',
        'url': 'https://oss.tobetopone.com/h5/fndYellowG_H5',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '愤怒的黄瓜 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '水果消一消',
        'desc': '',
        'url': 'https://renyounew.renyouwangluo.cn/remoteGame/sgxxl_dr/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '水果消一消 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '疯狂转圈圈',
        'desc': '',
        'url': 'https://online.xcx.snsfun.com/fkzqqwebnew/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '疯狂转圈圈 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '救救猪猪',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/noadgame/PigRun/tt2_0102/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '救救猪猪 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '觉醒吧侦探',
        'desc': '',
        'url': 'https://gametos.keepmobi.com/remote-res/re-geng-da-bao-zha/web/1.0.48_wqer/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '觉醒吧侦探 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '重新找下猫',
        'desc': '',
        'url': 'https://smartfox.top/cats/h5/1.2.40/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '重新找下猫 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '美味的食谱',
        'desc': '',
        'url': 'https://res.heigame.com/webRes/GrandmaFoodV2.5.3/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '美味的食谱 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小小芝麻官',
        'desc': '',
        'url': 'http://d.glf2ym.cn/8RRAy6',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小小芝麻官 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '来躺平呀',
        'desc': '',
        'url': 'https://renyousome.renyouwangluo.cn/remoteGame/ry_ltpy/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '来躺平呀 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '找就完事了',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/hzwz/zjwslh5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '找就完事了 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '愤怒的食物',
        'desc': '',
        'url': 'https://static-cdn.zhouhy.net/h5/project/qingdu/web/plants/2/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '愤怒的食物 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '牛了个牛',
        'desc': '',
        'url': 'https://file.gugudang.com/res/down/public/p_majiang/web-mobile/lts/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '牛了个牛 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '煮酒论英雄/钱袋子保卫战',
        'desc': '',
        'url': 'https://static-cdn.zhouhy.net/h5/project/qingdu/web/qigaidw/3/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '煮酒论英雄/钱袋子保卫战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '你药不药',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/249_1700117806449/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '你药不药 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '星球乱斗模拟',
        'desc': '',
        'url': 'https://qtweb.qtjoy.com/games/Gyroscope/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '星球乱斗模拟 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '成语挑战大玩家',
        'desc': '',
        'url': 'https://www.lekonghd.cn/cyxxx/0.3.1/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '成语挑战大玩家 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '破晓逃亡',
        'desc': '',
        'url': 'https://hanzdlddl.leiting.com/escape/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '破晓逃亡 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '最强狗头',
        'desc': '',
        'url': 'https://res.heigame.com/webRes/DogFightVer2.1.7/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '最强狗头 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '完美选择',
        'desc': '',
        'url': 'https://renyousome.renyouwangluo.cn/remoteGame/ly_cxnxj_dblm/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '完美选择 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '当将军真爽',
        'desc': '',
        'url': 'https://www.baiykq.cn/djjzs_1.1.0/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '当将军真爽 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑力侦探',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/nlzt/naolizhentan/h5_daren/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑力侦探 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '变异进化',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/259_1704421073225/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '变异进化 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '致富高手',
        'desc': '',
        'url': 'http://8.134.196.155:82/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '致富高手 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '武侠重生记',
        'desc': '',
        'url': 'https://cdn.datichengyu.com/yswl/h5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '武侠重生记 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '想不到鸭',
        'desc': '',
        'url': 'https://youmisdk.tongchuanggame.com/spotgame/web-mobile/index.html?_t=32',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '想不到鸭 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '酱香咖啡厅',
        'desc': '',
        'url': 'https://qtweb.qtjoy.com/games/CoffeeBigPlayer/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '酱香咖啡厅 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我还没上车啊',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/justeliminateit/car/h5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我还没上车啊 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '杯子消消消',
        'desc': '',
        'url': 'https://cpgame-1259238728.file.myqcloud.com/bzxxx/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '杯子消消消 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '暴走烧脑',
        'desc': '',
        'url': 'https://res3.haotgame.com/cu04/static/BaoZouShaoNao/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '暴走烧脑 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '翻牌大作战',
        'desc': '',
        'url': 'https://games.cdn.dianli100.com/mj/h5/5.0.1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '翻牌大作战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '废土前哨站',
        'desc': '',
        'url': 'https://game2.sfplay.net/CatSentinelHP/Doomsday',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '废土前哨站 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '解压空间',
        'desc': '',
        'url': 'https://cpgame-1259238728.file.myqcloud.com/jykj/noad/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '解压空间 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '快来救驾',
        'desc': '',
        'url': 'https://games.cdn.dianli100.com/mj/h5/2.0.3/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '快来救驾 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '潜水捕鱼',
        'desc': '',
        'url': 'https://cpgame-1259238728.file.myqcloud.com/qsby/no_ad/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '潜水捕鱼 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小小收纳',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/18002/web/1.0.170/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小小收纳 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超级收纳馆',
        'desc': '',
        'url': 'https://changshazhise01-1254961065.cos.ap-guangzhou.myqcloud.com/zhise/cjjyg/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超级收纳馆 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '收纳时光',
        'desc': '',
        'url': 'https://webgame-6gzwg8ti52e46012-1310209978.tcloudbaseapp.com/109snsg/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '收纳时光 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '最强大挑战',
        'desc': '',
        'url': 'https://changshazhise01-1254961065.cos.ap-guangzhou.myqcloud.com/H5/tt_zqdtz/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '最强大挑战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '地板英雄',
        'desc': '',
        'url': 'https://static-cdn.zhouhy.net/h5/project/qingdu/web/yizhichaosheng/1/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '地板英雄 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我嘞个逗',
        'desc': '',
        'url': 'https://xidieyoufeng.cdn.xiaojing.work/WoLeGeDou/WebNoAds/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我嘞个逗 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '天天找找不同',
        'desc': '',
        'url': 'https://res.game.7to.cn/gameres/pgame2/ttzbt/ttzbtlk12/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '天天找找不同 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '侦探小画家',
        'desc': '',
        'url': 'https://game-pkg.dooowin.com/open/g93/2024-01-08/tBP7MtSF/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '侦探小画家 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '攻防兼备',
        'desc': '',
        'url': 'https://packages.tobetopone.com/webGame/gsjb_H5_2/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '攻防兼备 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '明星养成手册',
        'desc': '',
        'url': 'https://account.api.snsfun.com/h5game/mxycsc1.0.1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '明星养成手册 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开局一颗球',
        'desc': '',
        'url': 'https://littlegame.tomato123.cn/kjykq/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开局一颗球 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '重生当剑客',
        'desc': '',
        'url': 'https://game2.sfplay.net/WulinStickman/v1',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '重生当剑客 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '情商天花板',
        'desc': '',
        'url': 'https://packages.tobetopone.com/webGame/QSTHB_H5',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '情商天花板 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '西天取经（密码随便填）',
        'desc': '',
        'url': 'https://game-static.heicheng51.com/gm/xitianqujing/web-mobile/index.html?_t=1705120735554',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '西天取经（密码随便填） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '足球大作战',
        'desc': '',
        'url': 'https://cdn.imagehost.top/games/zu-qq-da-zo-vj-pure/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '足球大作战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '最佳审判',
        'desc': '',
        'url': 'http://packages.tobetopone.com/webGame/zjsp_1/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '最佳审判 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '熊熊要回家',
        'desc': '',
        'url': 'http://www.91zyx.com:8080/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '熊熊要回家 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '最强球爱',
        'desc': '',
        'url': 'https://static-cdn.51haodong.com/oppo/helpdate2-oppo/1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '最强球爱 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '新跳一跳',
        'desc': '',
        'url': 'https://herofight.cn/preview/JumpAndJumpMobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '新跳一跳 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '躲猫猫秘密行动',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/sandbox3/duomaomao/v1/web-mobile/index.html?_t=1704270306648',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '躲猫猫秘密行动 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '宠物救援',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/ganshaojun/pet/webgl/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '宠物救援 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '末日庇护所',
        'desc': '',
        'url': 'https://game2.sfplay.net/CatSentinel3D/v2',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '末日庇护所 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我跑酷贼6',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/14001/web/1.0.5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我跑酷贼6 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '挖矿我特牛',
        'desc': '',
        'url': 'https://qtweb.qtjoy.com/games/MiningCollect/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '挖矿我特牛 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '第亿次收纳',
        'desc': '',
        'url': 'https://maoyumeng.club/dycsn/web/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '第亿次收纳 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '先赚一个亿',
        'desc': '',
        'url': 'https://cooperation.pailedi.com/web2/dingbowen/xzygy/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '先赚一个亿 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '沙雕的日常',
        'desc': '',
        'url': 'https://oss-game-res.fengjiangame.com/youyou/dy_sddrc/web-mobile/index.html?AccessKeyId=HBLOSMDEAUNYPH0MZO5T&Expires=1717126049&Signature=XZ%2BIzmTyHS7OfXtzxeR5D%2BvGSJQ%3D',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '沙雕的日常 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '挑战烧脑',
        'desc': '',
        'url': 'http://packages.tobetopone.com/webGame/tzsnNeU66/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '挑战烧脑 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '史上最难挑战',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/puzzleplayer/h5-tt/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '史上最难挑战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '趣味烧脑',
        'desc': '',
        'url': 'https://mini.ssflashgo.com/stonesh/zxm/qwsn/web20231212/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '趣味烧脑 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '饥荒不慌',
        'desc': '',
        'url': 'https://renyousome.renyouwangluo.cn/remoteGame/jhbh_dr/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '饥荒不慌 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '精神大鹅',
        'desc': '',
        'url': 'https://www.wesane.com/game/1342/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '精神大鹅 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '车水马龙',
        'desc': '',
        'url': 'https://demo.9999le.com/csml9nolimit/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '车水马龙 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '飞行球',
        'desc': '',
        'url': 'https://fs-zy.hudong.city/zy12/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '飞行球 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '赚钱养女儿',
        'desc': '',
        'url': 'https://www.lekonghd.cn/wyynr2/0.0.2/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '赚钱养女儿 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '独臂逃生',
        'desc': '',
        'url': 'https://cpgame-1259238728.file.myqcloud.com/dbts/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '独臂逃生 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '往后牌牌',
        'desc': '',
        'url': 'https://renyounew.renyouwangluo.cn/remoteGame/wangHouPaiPaiNewGame/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '往后牌牌 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '摇摆龙',
        'desc': '',
        'url': 'https://renyousome.renyouwangluo.cn/remoteGame/zhsl/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '摇摆龙 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '老司机让让我',
        'desc': '',
        'url': 'https://www.wesane.com/game/1828/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '老司机让让我 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '找个茬茬',
        'desc': '',
        'url': 'https://socho-1302513287.cos.ap-nanjing.myqcloud.com/shygt/res_web/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '找个茬茬 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '收手吧阿祖',
        'desc': '',
        'url': 'https://renyounew.renyouwangluo.cn/remoteGame/zumaTT_daren/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '收手吧阿祖 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '下一关在哪',
        'desc': '',
        'url': 'https://lyngames-1302407170.cos.ap-guangzhou.myqcloud.com/shenhe/xygzn/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '下一关在哪 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '砖块弹球王者',
        'desc': '',
        'url': 'https://game-pkg.dooowin.com/open/g72/2023-12-20/8HJd5jOU/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '砖块弹球王者 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这一关好难',
        'desc': '',
        'url': 'https://qtweb.qtjoy.com/games/Staple/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这一关好难 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '方块文明',
        'desc': '',
        'url': 'https://hzgf-cdn.666333999.top/dr/fkwm/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '方块文明 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '粉末沙盒',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.net/wb_webview/SaveTheGirl/fenmogame/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '粉末沙盒 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑汁分你一半',
        'desc': '',
        'url': 'https://changshazhise01-1254961065.cos.ap-guangzhou.myqcloud.com/partner/xp/nzfnyb/0.0.9/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑汁分你一半 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '挪车冲冲冲',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/noadgame/MoveCar/1208/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '挪车冲冲冲 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '进阶2048',
        'desc': '',
        'url': 'https://mini.ssflashgo.com/stonesh/v-lez/smallTadpole2048/web_0824_1632/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '进阶2048 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '合成神龙2',
        'desc': '',
        'url': 'https://file.gugudang.com/res/down/public/p_fengkuangxiaoyutang/web/lts/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '合成神龙2 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '魔兽骑士',
        'desc': '',
        'url': 'https://renyousome.renyouwangluo.cn/remoteGame/mjqs1/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '魔兽骑士 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '迷之探索',
        'desc': '',
        'url': 'https://static-cdn.zhouhy.net/h5/project/qingdu/web/motamaoxian/1/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '迷之探索 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '捉妖英雄记',
        'desc': '',
        'url': 'https://static-cdn.zhouhy.net/h5/project/qingdu/web/PrimitivePerson/5/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '捉妖英雄记 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '猛鬼乐园',
        'desc': '',
        'url': 'https://static-cdn.zhouhy.net/h5/project/qingdu/web/wopanigegui/2/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '猛鬼乐园 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '愤怒的植物',
        'desc': '',
        'url': 'https://static-cdn.zhouhy.net/h5/project/qingdu/web/plants/2/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '愤怒的植物 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '真能消除',
        'desc': '',
        'url': 'https://aaa.puffergames.com/GameServerData/DiamondMatch/Diamond9/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '真能消除 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '王者打工人',
        'desc': '',
        'url': 'https://wwjres.haowan823.cn/xyxh5_test/dgr_test/web5/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '王者打工人 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '恐龙变形计',
        'desc': '',
        'url': 'https://account.api.snsfun.com/h5game/klbxj1.0.3/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '恐龙变形计 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '魔塔经典版',
        'desc': '',
        'url': 'https://eayew.com/resource/web/magic_tower/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '魔塔经典版 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '你有我快吗',
        'desc': '',
        'url': 'https://cdn.198434.com/h5/zhise/nywkm202403211318/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '你有我快吗 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '全民找不动',
        'desc': '',
        'url': 'https://res.wqop2018.com/zhise/fkdy/chtest/qmzbd6/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '全民找不动 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '虐爆强迫症',
        'desc': '',
        'url': 'https://changshazhise01-1254961065.cos.ap-guangzhou.myqcloud.com/h5_game/nbqpz/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '虐爆强迫症 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '不可名状的奇境',
        'desc': '',
        'url': 'https://candymatch-update.fjbgwl.com/xiongmao/2024012201/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '不可名状的奇境 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '狗狗创业记',
        'desc': '',
        'url': 'https://cdn.antplay888.com/gouGouChuangYeJi/ouihgui4/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '狗狗创业记 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '箱子管理大师',
        'desc': '',
        'url': 'https://oss.tobetopone.com/h5/xzglds1/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '箱子管理大师 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '洗浴城大玩家',
        'desc': '',
        'url': 'https://qtweb.qtjoy.com/games/spaBigPlayer/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '洗浴城大玩家 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '胡了个牌',
        'desc': '',
        'url': 'https://oss.tobetopone.com/h5/mlgj/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '胡了个牌 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '雷神一败不起',
        'desc': '',
        'url': 'https://static-cdn.zhouhy.net/h5/project/qingdu/web/motamaoxian/1/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '雷神一败不起 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '劈砖大师',
        'desc': '',
        'url': 'https://cooperation.pailedi.com/web2/dingbowen/pzds/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '劈砖大师 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '乱斗派对',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/riotparty/h5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '乱斗派对 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '怪物猎杀狂暴版',
        'desc': '',
        'url': 'https://static-cdn.zhouhy.net/h5/project/qingdu/web/moritegong/1/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '怪物猎杀狂暴版 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '快乐合方块',
        'desc': '',
        'url': 'https://leqi-1259286428.file.myqcloud.com/games/spherenoad/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '快乐合方块 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '登山极限摩托狂飙',
        'desc': '',
        'url': 'https://source.youletd.com/file/h5/dsjxmtkb/v101/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '登山极限摩托狂飙 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '砖了个砖',
        'desc': '',
        'url': 'https://incubator-static.easygame2021.com/move-block-game/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '砖了个砖 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '向往的庄园',
        'desc': '',
        'url': 'https://cdn.kunyou88.cn/fanpai/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '向往的庄园 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '爆棚的智商',
        'desc': '',
        'url': 'https://guiwuzhe-1257957916.file.myqcloud.com/explodingIQ/res/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '爆棚的智商 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这关你不行',
        'desc': '',
        'url': 'http://1.117.9.183/_miniGame/daluosi2/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这关你不行 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我是大玩家',
        'desc': '',
        'url': 'https://changshazhise01-1254961065.cos.ap-guangzhou.myqcloud.com/cp/xp_xcdwj/tt-h5/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我是大玩家 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '王者精英5V5',
        'desc': '',
        'url': 'https://wwjres.haowan823.cn/xyxh5_test/mb3d5v5_h5_test/ver2/?',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '王者精英5V5 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我靠钓鱼娶女神',
        'desc': '',
        'url': 'https://game2.sfplay.net/HookFish/v1.0.0/v1',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我靠钓鱼娶女神 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '看你怎么玩',
        'desc': '',
        'url': 'http://love.stygame.com/h5/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '看你怎么玩 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '俄罗斯方块新版',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/18003/web/1.0.2/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '俄罗斯方块新版 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我的客运公司',
        'desc': '',
        'url': 'https://tos.qwpo2018.com/mp/game/web/gm/a60a2d5458f3f98fd8c6f85c26a68dab/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我的客运公司 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '模拟大作战',
        'desc': '',
        'url': 'https://tos.qwpo2018.com/mp/game/web/gm/f0cf9afd5c4b675924e351699560ca5a/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '模拟大作战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '美少女安琪拉',
        'desc': '',
        'url': 'https://static-cdn.zhouhy.net/h5/project/qingdu/web/luandouxiaojiejie1/3/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '美少女安琪拉 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '加减大师',
        'desc': '',
        'url': 'https://tos.qwpo2018.com/mp/game/web/gm/ded6b1d870c72218f5af7470488c1624/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '加减大师 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '线条趣味闯关',
        'desc': '',
        'url': 'https://www.lekonghd.cn/xtqwcg/0.0.3/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '线条趣味闯关 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '反击英雄',
        'desc': '',
        'url': 'https://res.xcx.snsfun.com/fjyxWEB_01/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '反击英雄 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我好难啊',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/208_1706955248420/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我好难啊 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这就是骚操作',
        'desc': '',
        'url': 'https://res.kampfiregames.cn/runFish4/vestBag1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这就是骚操作 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '逃出小屋',
        'desc': '',
        'url': 'https://game.niudu.com/drlj/tpdmm/web_tcxw/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '逃出小屋 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '大脑会拐弯',
        'desc': '',
        'url': 'https://changshazhise01-1254961065.cos.ap-guangzhou.myqcloud.com/H5/wddnhgw/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '大脑会拐弯 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '肥宅乐园',
        'desc': '',
        'url': 'http://8.134.196.155:81/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '肥宅乐园 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '薯条冲冲冲',
        'desc': '',
        'url': 'https://res.xcx.snsfun.com/stccc/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '薯条冲冲冲 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '嘻帅打螺丝',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.net/wb_webview/playHammer/playHammer/_xishui/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '嘻帅打螺丝 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '纸上攻防战',
        'desc': '',
        'url': 'https://game2.sfplay.net/CatSentinelHp/match/v1.0.1/v2',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '纸上攻防战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '疯狂战车',
        'desc': '',
        'url': 'https://file.gugudang.com/res/down/public/p_fkbmh/web/lts/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '疯狂战车 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '勇气大挑战',
        'desc': '',
        'url': 'https://changshazhise01-1254961065.cos.ap-guangzhou.myqcloud.com/H5/yqdtz/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '勇气大挑战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '疯狂成团',
        'desc': '',
        'url': 'https://changshazhise01-1254961065.cos.ap-guangzhou.myqcloud.com/cp/tt_wzwz/fkct/fkct1.0.1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '疯狂成团 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '饥荒不慌',
        'desc': '',
        'url': 'https://renyousome.renyouwangluo.cn/remoteGame/jhbh_dr/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '饥荒不慌 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '迷你军团战争',
        'desc': '',
        'url': 'https://cpgame-1259238728.file.myqcloud.com/miniBattle/test/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '迷你军团战争 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '背后的真相',
        'desc': '',
        'url': 'https://qcdn.bdoggame.com/ttgame/joWeb/webVer/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '背后的真相 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '爬塔小飞棍',
        'desc': '',
        'url': 'https://candymatch-update.fjbgwl.com/webmobile11/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '爬塔小飞棍 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '三国哈哈哈',
        'desc': '',
        'url': 'https://sghhh.99aly.com/5agamewx/alywx/sghhh/wx/sghhh/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '三国哈哈哈 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '动物欢乐消',
        'desc': '',
        'url': 'https://tos.qwpo2018.com/mp/game/web/gm/09b8c9da6a001e238d87e26cc7e8675a/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '动物欢乐消 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '海岛钓鱼',
        'desc': '',
        'url': 'https://game.niudu.com/drlj/mermaid/web/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '海岛钓鱼 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '素人改造师',
        'desc': '',
        'url': 'https://renyounew.renyouwangluo.cn/remoteGame/auto_upload_srgzs/web-mobile/?time=1703834554284',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '素人改造师 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '老铁来一局',
        'desc': '',
        'url': 'https://static-cdn.zhouhy.net/h5/project/qingdu/web/majiangxxl/2/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '老铁来一局 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '全民放映员',
        'desc': '',
        'url': 'http://81.70.169.201:4000/pingceGame/110426/Web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '全民放映员 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '猜就完事了',
        'desc': '',
        'url': 'http://121.36.35.227:8081/emoteMobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '猜就完事了 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑力挑战大师',
        'desc': '',
        'url': 'https://origin.xmguanong.cn/nitpick/puregame/index.v1.0.16.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑力挑战大师 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '疯狂过山车',
        'desc': '',
        'url': 'https://file.gugudang.com/res/down/public/p_fkxhc/web/lts/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '疯狂过山车 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '子弹飞车联盟',
        'desc': '',
        'url': 'https://gz-1305296755.cos.ap-guangzhou.myqcloud.com/%E4%BD%93%E9%AA%8C%E9%93%BE%E6%8E%A5/%E5%AD%90%E5%BC%B9%E9%A3%9E%E8%BD%A6%E8%81%94%E7%9B%9F/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '子弹飞车联盟 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '挣他一个亿',
        'desc': '',
        'url': 'https://renyounew.renyouwangluo.cn/remoteGame/ztygy_test/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '挣他一个亿 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '欢乐水果大乱斗',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/justeliminateit/justmove/h5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '欢乐水果大乱斗 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消除吧豆腐君',
        'desc': '',
        'url': 'https://static-cdn.zhouhy.net/h5/project/qingdu/web/majiangxxl/2/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消除吧豆腐君 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '王国之剑',
        'desc': '',
        'url': 'https://renyounew.renyouwangluo.cn/remoteGame/newYjktm0108/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '王国之剑 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '内鱼游走了',
        'desc': '',
        'url': 'https://wenshi-static.game.jingyougz.com/minigame/h5/pond/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '内鱼游走了 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑力挑战赛',
        'desc': '',
        'url': 'https://qtweb.qtjoy.com/games/Stratego/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑力挑战赛 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '武侠重生记',
        'desc': '',
        'url': 'https://cdn.datichengyu.com/yswl/h5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '武侠重生记 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '喵喵小厨娘',
        'desc': '',
        'url': 'https://enjoygaga-1300513096.cos.ap-shanghai.myqcloud.com/game/cooking/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '喵喵小厨娘 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '你家快没了',
        'desc': '',
        'url': 'https://renyousome.renyouwangluo.cn/remoteGame/njkml_dr/?day=0',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '你家快没了 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我真的会谢',
        'desc': '',
        'url': 'https://file-wzdhx.kidikidi.net/web/promote/after/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我真的会谢 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '数一亿粒米',
        'desc': '',
        'url': 'https://game-static.heicheng51.com/gm/sm/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '数一亿粒米 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '抢滩登陆HD/登陆计划',
        'desc': '',
        'url': 'https://file.gugudang.com/res/down/public/p_xxqs/web_qwdmx/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '抢滩登陆HD/登陆计划 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '瓶盖消消消',
        'desc': '',
        'url': 'https://renyousome.renyouwangluo.cn/remoteGame/pgxxx_test/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '瓶盖消消消 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '箭头消消消',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/noadgame/TapAway/1225/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '箭头消消消 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑子不服了',
        'desc': '',
        'url': 'https://game.bytetimes.com/web-mobile/BrainNotConvinced',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑子不服了 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '奇葩英雄大战',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/28018/web/1.0.0/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '奇葩英雄大战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我找你妹',
        'desc': '',
        'url': 'https://games.cdn.dianli100.com/mj/tt/1.0.1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我找你妹 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '进击的小土豆',
        'desc': '',
        'url': 'https://game-static.heicheng51.com/gm/potato/web-mobile/index.html?v=1.0.1',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '进击的小土豆 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '疯狂进化人',
        'desc': '',
        'url': 'https://file.gugudang.com/res/down/public/p_fkjh/web/lts/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '疯狂进化人 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '精英泡泡堂',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.net/wb_webview/sandbox3/sheep3d/h5/web-mobile/index.html?_t=1706268733511',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '精英泡泡堂 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '愤怒的植物新春版',
        'desc': '',
        'url': 'https://static-cdn.zhouhy.net/h5/project/qingdu/web/plants/2/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '愤怒的植物新春版 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '机器人大挑战',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.net/wb_webview/myDog/robotBattle/daren/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '机器人大挑战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '老铁来一局',
        'desc': '',
        'url': 'https://static-cdn.zhouhy.net/h5/project/qingdu/web/gecao/2/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '老铁来一局 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '特色烧烤',
        'desc': '',
        'url': 'https://static-cdn.zhouhy.net/h5/project/qingdu/web/shaokao/4/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '特色烧烤 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '召唤超神龙',
        'desc': '',
        'url': 'https://games.qtjoy.com/games/DragonNew/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '召唤超神龙 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '地下怪物',
        'desc': '',
        'url': 'https://file.gugudang.com/res/down/public/p_jushajuren/web/lts/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '地下怪物 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '铁锅炖自己',
        'desc': '',
        'url': 'https://game-1258102047.file.myqcloud.com/test/dy-games/ip-web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '铁锅炖自己 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '疯狂萌宠派对',
        'desc': '',
        'url': 'https://xiaogou-update.fjbgwl.com/web-mobileCG2/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '疯狂萌宠派对 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '整活大行家',
        'desc': '',
        'url': 'https://cdngame.shuling.vip/BianJuDaShi/ZhengHuoDaHangJia/h5/web-mobile/index.html?1.0.0=',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '整活大行家 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '怨宅',
        'desc': '',
        'url': 'https://static-cdn.51haodong.com/oppo/horror_amongus/1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '怨宅 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我要上王者/无敌闯关高手',
        'desc': '',
        'url': 'https://minigame-1300810619.cos.ap-guangzhou.myqcloud.com/emperor/client/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我要上王者/无敌闯关高手 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '智商贼高250',
        'desc': '',
        'url': 'https://xcdn.selpay.cn/games2/xxl/0.0.1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '智商贼高250 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '2048大招版',
        'desc': '',
        'url': 'http://2048_v1_v1.0.5.layagame.fullskystar.com/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '2048大招版 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '模拟求生',
        'desc': '',
        'url': 'https://res3.haotgame.com/cu04/static/HungerCastle/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '模拟求生 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消个土豆',
        'desc': '',
        'url': 'https://h5.wugua.com.cn/project_potato/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消个土豆 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '有间烧烤店',
        'desc': '',
        'url': 'http://wxclient.gzqidong.cn/GunFactory/wencong_desk/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '有间烧烤店 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '有间烧烤店',
        'desc': '',
        'url': 'http://wxclient.gzqidong.cn/GunFactory/operateTest_desk/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '有间烧烤店 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '火锅消不停',
        'desc': '',
        'url': 'https://tos.qwpo2018.com/mp/game/web/gm/700cfe333bb7dd5b8b1d18fcb31cf8d6/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '火锅消不停 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '兔兔爱消除',
        'desc': '',
        'url': 'http://112.74.33.201:8080/xcyx',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '兔兔爱消除 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '野王999',
        'desc': '',
        'url': 'https://test2-1258404770.file.myqcloud.com//test-game/LL/yd999/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '野王999 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '给你脸了',
        'desc': '',
        'url': 'https://renyounew.renyouwangluo.cn/remoteGame/gameGNLL20240228_OSSgnlltt1/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '给你脸了 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '完蛋我成了负二代',
        'desc': '',
        'url': 'https://static.cdwaterbear.cn/SimulationGame_Web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '完蛋我成了负二代 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '沉浸解压馆',
        'desc': '',
        'url': 'https://cooperation.pailedi.com/web2/gameClean/web-mobile23/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '沉浸解压馆 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '暴走贪吃蛇',
        'desc': '',
        'url': 'https://dy-snake-test.meideng.net/super/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '暴走贪吃蛇 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '十万个套路',
        'desc': '',
        'url': 'https://keepmobi.com/remote-res/qiong-ren-ni-xi-ji/web/ks_gqsxz/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '十万个套路 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '一剑开天门',
        'desc': '',
        'url': 'https://renyounew.renyouwangluo.cn/remoteGame/yjktm_Dr1.0.43/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '一剑开天门 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '打到100关',
        'desc': '',
        'url': 'https://www.joyhearttech.com/blood/Coins/Web/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '打到100关 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '暴了个富',
        'desc': '',
        'url': 'https://cooperation.pailedi.com/web2/wuff/counter-attack/demo/v12/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '暴了个富 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '梦想油田',
        'desc': '',
        'url': 'https://hscdn1.quanmin-game.com/test/202402070050/000/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '梦想油田 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '街边杂货铺',
        'desc': '',
        'url': 'https://renyousome.renyouwangluo.cn/remoteGame/cssx_dr/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '街边杂货铺 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '欢乐小生意',
        'desc': '',
        'url': 'http://47.106.210.10/xiaoshengyi',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '欢乐小生意 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '蘑菇冲突',
        'desc': '',
        'url': 'https://glyx2.17tcw.com/H5/Test/mgct/8/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '蘑菇冲突 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '拿下100关',
        'desc': '',
        'url': 'https://game.littleboy.net/games/caishengttv7/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '拿下100关 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '爱上叠叠叠（浏览器打开，聊天框不行）',
        'desc': '',
        'url': 'https://oss-test.aligame.top/douyin/6968/v1.0.1/desktop/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '爱上叠叠叠（浏览器打开，聊天框不行） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '爱上叠叠叠（浏览器打开，聊天框不行）',
        'desc': '',
        'url': 'https://oss-test.aligame.top/douyin/6968/v1.0.1/mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '爱上叠叠叠（浏览器打开，聊天框不行） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '花园叠叠消',
        'desc': '',
        'url': 'https://game-static.heicheng51.com/gm/hyddx/web-mobile/index.html?v=1.0.1',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '花园叠叠消 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '家园物语 躺平打怪',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/sandbox3/TPDG/web-mobile/index.html?_t=1709105047614',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '家园物语 躺平打怪 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '荒岛大作战',
        'desc': '',
        'url': 'https://cdn.rewanyouxi.com/games/link/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '荒岛大作战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '致富大作战',
        'desc': '',
        'url': 'http://101.43.205.35:8095/ZhiFuDaZuoZhan_8/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '致富大作战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '愚公移大山（密码随便填）',
        'desc': '',
        'url': 'https://game-static.heicheng51.com/gm/ygys/web-mobile/index.html?v=1.0.1',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '愚公移大山（密码随便填） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '进击的大鹅/鹅鹅出击平替',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/noadgame/GoGoGoose/20240326_1/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '进击的大鹅/鹅鹅出击平替 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '王者战塔英雄',
        'desc': '',
        'url': 'https://oss.chuanqwx.com/ztwz/wh5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '王者战塔英雄 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '炮弹兵冲冲冲',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/zuimei/web/1.1.0/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '炮弹兵冲冲冲 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '萌宠美食街',
        'desc': '',
        'url': 'https://cdn.cxgame.net/game/xiaoshijie/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '萌宠美食街 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '闯关乐园',
        'desc': '',
        'url': 'https://tos.qwpo2018.com/mp/game/web/gm/51e25f06010d92b781a92fe02d99391c/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '闯关乐园 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我解题特牛',
        'desc': '',
        'url': 'https://ministatic.cdzyzs.net/game-wjttn/h5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我解题特牛 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '天天来收纳',
        'desc': '',
        'url': 'https://www.znhy123.cn/ttlsn/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '天天来收纳 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '疯狂的石头',
        'desc': '',
        'url': 'https://oss.zhejing.tech/webH5/dont-stop/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '疯狂的石头 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '数字大师',
        'desc': '',
        'url': 'https://oss.tobetopone.com/h5/stitch/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '数字大师 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我是显眼包',
        'desc': '',
        'url': 'https://hulumao.cdn.xiaojing.work/h5/xyb/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我是显眼包 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '糖果爱消消',
        'desc': '',
        'url': 'https://cocos-4gxdj2aj4ef4821e-1324759429.tcloudbaseapp.com/thl/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '糖果爱消消 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '赚够100关',
        'desc': '',
        'url': 'https://antplay888.com/zG100g/asd/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '赚够100关 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '钉子要回家',
        'desc': '',
        'url': 'https://tos.qwpo2018.com/mp/game/web/gm/768b2b758e66193e25ed78aa935647bd/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '钉子要回家 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '闪击派对',
        'desc': '',
        'url': 'https://changshazhise01-1254961065.cos.ap-guangzhou.myqcloud.com/H5/sjpd/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '闪击派对 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '打个螺丝儿',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/noadgame/screwJam/240327/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '打个螺丝儿 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '蛇皮走位',
        'desc': '',
        'url': 'https://www.lekonghd.cn/spzw/1.0.1/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '蛇皮走位 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '海岛求生大赛',
        'desc': '',
        'url': 'https://account.api.snsfun.com/h5game/hdqsds1.0.7/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '海岛求生大赛 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '看你怎么玩',
        'desc': '',
        'url': 'https://cdn-corp.cygame666.cn/brainHole/client/web/web-mobile8/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '看你怎么玩 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '打个螺丝钉',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/noadgame/ImageScrew/20240407/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '打个螺丝钉 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '叠了又叠',
        'desc': '',
        'url': 'https://game.littleboy.net/games/dlydv1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '叠了又叠 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '迷你贪吃蛇3D',
        'desc': '',
        'url': 'https://oppomini.eqmobi.com/stonesh/games/snake3d/mntcs0424fhfgjhgjhk/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '迷你贪吃蛇3D 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑力挑战赛',
        'desc': '',
        'url': 'https://qtweb.qtjoy.com/games/Stratego/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑力挑战赛 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '整得害挺好',
        'desc': '',
        'url': 'https://game.hongshunet.com/zhuangmm/zhengdehaitinghao/cs/0.0.14/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '整得害挺好 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '你是不是菜（加载慢需要5~15秒，请耐心等待）',
        'desc': '',
        'url': 'https://tos.qwpo2018.com/mp/game/web/gm/e69b9ad4746abda7c23f1d111ef09c2a/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '你是不是菜（加载慢需要5~15秒，请耐心等待） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '活到大结局',
        'desc': '',
        'url': 'https://h5-1258110380.file.myqcloud.com/test2/pdttt/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '活到大结局 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超级解压王',
        'desc': '',
        'url': 'https://mini.ssflashgo.com/stonesh/hh/qwsn/web/?gameid=cjjyw&version=1707301656613',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超级解压王 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '不响丸辣',
        'desc': '',
        'url': 'https://renyousome.renyouwangluo.cn/remoteGame/ly_bxwl_test/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '不响丸辣 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '砍价大师',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/noadgame/KanJia/20230926/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '砍价大师 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '凑十消消',
        'desc': '',
        'url': 'https://dd.darknight.games/MahJong/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '凑十消消 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '建造我最牛/我的KTV酒店（加载慢需要5~15秒，请耐心等待）',
        'desc': '',
        'url': 'https://game2.sfplay.net/ktv_3D/v1.0.0/v1',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '建造我最牛/我的KTV酒店（加载慢需要5~15秒，请耐心等待） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '爬塔贼溜（加载慢需要5~15秒，请耐心等待）',
        'desc': '',
        'url': 'https://candymatch-update.fjbgwl.com/web-mobile1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '爬塔贼溜（加载慢需要5~15秒，请耐心等待） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '人类超级进化（第一次进不去就退出多进几次）',
        'desc': '',
        'url': 'https://game2.sfplay.net/SuperEvolution/v1.0.11/v1/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '人类超级进化（第一次进不去就退出多进几次） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '鸭鸭收纳大师',
        'desc': '',
        'url': 'https://www.rewanyouxi.com/games/snds/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '鸭鸭收纳大师 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '彩笔大作战',
        'desc': '',
        'url': 'https://tos.qwpo2018.com/mp/game/web/gm/135c1ce999104a85ae0f18d60c6c98bb/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '彩笔大作战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '山地摩托漂移/极品登山摩托',
        'desc': '',
        'url': 'https://source.youletd.com/file/h5/dsjxmtkb/v101/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '山地摩托漂移/极品登山摩托 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '破冰行动/滑个冰圈圈',
        'desc': '',
        'url': 'https://www.wesane.com/game/1673/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '破冰行动/滑个冰圈圈 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '美食串串串',
        'desc': '',
        'url': 'https://cdn.hanyougame.cn/MscccGame/web/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '美食串串串 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '有趣解压神器',
        'desc': '',
        'url': 'https://qt.szyqhd.com:6001/jieyaguan/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '有趣解压神器 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '拯救我的漂亮女友',
        'desc': '',
        'url': 'https://lvgame.android.riofun.cn/emperorhtml/zjny/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '拯救我的漂亮女友 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '废物成神',
        'desc': '',
        'url': 'https://file.gugudang.com/res/down/public/p_fwcs_zs/web-mobile/lts/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '废物成神 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '求生前哨站',
        'desc': '',
        'url': 'https://cdn.tagame.cn/60qsqsz/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '求生前哨站 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我又长脑子了',
        'desc': '',
        'url': 'https://final-puzzle-res.exploent.com/h5/1.0.0/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我又长脑子了 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '王牌司机',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/driveplane/h5-zb/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '王牌司机 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '火柴人就要吃鸡',
        'desc': '',
        'url': 'https://res.sjzgxwl.com/pingce/HuoChaiRenChiJiHeJi/HuoChaiRenJiuYaoChiJi/web/100/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '火柴人就要吃鸡 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '猫狗家园争霸',
        'desc': '',
        'url': 'https://super-mt.com/game/v2/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '猫狗家园争霸 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '海上攻防战（加载慢需要5~15秒，请耐心等待）',
        'desc': '',
        'url': 'https://changshazhise01-1254961065.cos.ap-guangzhou.myqcloud.com/partner/grcy/hsgfz/H5/0.2/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '海上攻防战（加载慢需要5~15秒，请耐心等待） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '车了个车',
        'desc': '',
        'url': 'https://res.xcx.snsfun.com/dgnxcWEB_05/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '车了个车 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我上菜最牛（加载慢需要5~15秒，请耐心等待）',
        'desc': '',
        'url': 'https://tos.qwpo2018.com/mp/game/web/gm/a48fe6fcc8cc2c7b8b0e4dc4dd61aa1c/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我上菜最牛（加载慢需要5~15秒，请耐心等待） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '万宁桌球',
        'desc': '',
        'url': 'https://game-res.tos-cn-beijing.volces.com/web-games/zzTest/zuoqiu/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '万宁桌球 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '英雄吃鸡',
        'desc': '',
        'url': 'https://static-cdn.zhouhy.net/h5/project/qingdu/web/pixel_eat_chicken/1/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '英雄吃鸡 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '老铁来一局',
        'desc': '',
        'url': 'https://static-cdn.zhouhy.net/h5/project/qingdu/web/gecao/2/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '老铁来一局 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '体育生的集体生活',
        'desc': '',
        'url': 'http://game2.sfplay.net/tys/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '体育生的集体生活 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '眼神不错哟',
        'desc': '',
        'url': 'https://ykres.yigomob.com/noad/EyeNotBad/1.3.47_0608/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '眼神不错哟 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '舌尖上的早餐',
        'desc': '',
        'url': 'http://candymatch-update.fjbgwl.com/web-break1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '舌尖上的早餐 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '合成金斧子',
        'desc': '',
        'url': 'https://game2.sfplay.net/Shovel3D/v1.0.0/v2/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '合成金斧子 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '关不住我吧',
        'desc': '',
        'url': 'https://res.wqop2018.com/partner/hzdy/gbzwb/H5_gbzwb/6_7/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '关不住我吧 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '打工没前途',
        'desc': '',
        'url': 'https://cdn.hiluluke.com/noad/dagong/index2.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '打工没前途 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我在唐朝打工',
        'desc': '',
        'url': 'https://game2.sfplay.net/wzdtdg/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我在唐朝打工 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '创神记',
        'desc': '',
        'url': 'http://dkx.17xinxiang.com',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '创神记 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '农场挪挪消',
        'desc': '',
        'url': 'https://cdn.moblazer.com/farmjams/web19/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '农场挪挪消 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这消除很解压',
        'desc': '',
        'url': 'https://web-project.feigo.fun/douyin-xmxmj/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这消除很解压 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '真实车祸模拟',
        'desc': '',
        'url': 'https://game2.sfplay.net/thecar/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '真实车祸模拟 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '骷髅传奇',
        'desc': '',
        'url': 'http://47.101.48.84:8085/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '骷髅传奇 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '流浪小星球',
        'desc': '',
        'url': 'http://web-game.just-player.cn/webGame/llxq/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '流浪小星球 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '飙车对决',
        'desc': '',
        'url': 'https://web-project.feigo.fun/projWeb/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '飙车对决 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '全民足球射手',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/noadgame/Football/240710/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '全民足球射手 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '80后小卖部',
        'desc': '',
        'url': 'https://cdn.suyujoy.com/ljx/xmb_tt/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '80后小卖部 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '割断那根绳',
        'desc': '',
        'url': 'https://h5game.godricc.com/out/cutjam/202406201932/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '割断那根绳 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '塔塔守卫战',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/166_1721898099562/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '塔塔守卫战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '美女包围了我（进入游戏页面会黑屏5-10秒，耐心等待即可）',
        'desc': '',
        'url': 'https://wdztbj-1256464321.cos.ap-guangzhou.myqcloud.com/mnbwlw/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '美女包围了我（进入游戏页面会黑屏5-10秒，耐心等待即可） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这个你会吗',
        'desc': '',
        'url': 'https://changshazhise01-1254961065.cos.ap-guangzhou.myqcloud.com/cp/tt_wzwz/001_toilet/h5daren-1.0.0/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这个你会吗 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开局一辆车',
        'desc': '',
        'url': 'https://qcdn.bdoggame.com/ttgame/kjylc/webVer/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开局一辆车 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '好玩世界',
        'desc': '',
        'url': 'https://battle-game-1301729538.cos.ap-shanghai.myqcloud.com/bus-eliminate/h5/v1.0.10/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '好玩世界 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '喵喵守卫战',
        'desc': '',
        'url': 'https://res.sjzgxwl.com/WSZ/ChiBuDaoWo/Test/20240719_1845/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '喵喵守卫战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '隐形背叛者',
        'desc': '',
        'url': 'https://xiaorenshangche-1300810619.cos.ap-guangzhou.myqcloud.com/ragecontrol/webgl/4.4/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '隐形背叛者 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '地底巡游',
        'desc': '',
        'url': 'http://101.43.205.35:8095/GoldMiner/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '地底巡游 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '高性能（进入会白屏20-25秒耐心等待即可）',
        'desc': '',
        'url': 'https://res.wqop2018.com/partner/hzdy/lxcb/ylyxc2/webgl_WX_0712A/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '高性能（进入会白屏20-25秒耐心等待即可） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '低性能（进入会卡住10-15秒耐心等待即可）',
        'desc': '',
        'url': 'https://res.wqop2018.com/partner/hzdy/lxcb/ylyxc2/webgl_DY_0712A/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '低性能（进入会卡住10-15秒耐心等待即可） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '摸鱼之王',
        'desc': '',
        'url': 'https://mini.ssflashgo.com/stonesh/hh/lxds/web/myzw_test.html?time=1721745151280',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '摸鱼之王 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '领地守卫战',
        'desc': '',
        'url': 'https://res.sjzgxwl.com/yk/bald/1.22/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '领地守卫战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '单刀直入/纸上弹兵',
        'desc': '',
        'url': 'https://paperon.soulgame.net.cn/h5/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '单刀直入/纸上弹兵 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '整个活吧',
        'desc': '',
        'url': 'https://qihuanmao.cdn.xiaojing.work/ZhengHuoGame/ZBAds/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '整个活吧 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '关不住我吧（加载慢需要5~15秒，请耐心等待）',
        'desc': '',
        'url': 'https://res.wqop2018.com/partner/hzdy/gbzwb/H5_gbzwb/7_26/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '关不住我吧（加载慢需要5~15秒，请耐心等待） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '密码看下方文档：',
        'desc': '',
        'url': 'https://flowus.cn/share/af358f56-a1c7-4181-92c3-7825a06aa341?code=TXY22B',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '密码看下方文档： 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '敌人别嚣张',
        'desc': '',
        'url': 'https://changshaqihuan.cn/game004_hctf/n6qBNxlr_m7oeKS%2BB%24HUUIYk%261f7PjutD8~Hh9RJX~garFB4Sw1THs1S%26/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '敌人别嚣张 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '蛋仔搭子 （加载慢需要5~15秒，请耐心等待）',
        'desc': '',
        'url': 'https://games.cdn.dianli100.com/dztz/h5/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '蛋仔搭子 （加载慢需要5~15秒，请耐心等待） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '上班不能停',
        'desc': '',
        'url': 'https://games.cdn.dianli100.com/sbbnt/H5/1.0.0a/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '上班不能停 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '解谜之王（亲 游戏更新太快，如出现游戏链接打不开请联系客服更新）',
        'desc': '',
        'url': 'https://res.wqop2018.com/zhise/jmzw2/chengyugm305/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '解谜之王（亲 游戏更新太快，如出现游戏链接打不开请联系客服更新） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '解谜之王（亲 游戏更新太快，如出现游戏链接打不开请联系客服更新）',
        'desc': '',
        'url': 'https://res.wqop2018.com/zhise/jmzw2/chengyugm307/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '解谜之王（亲 游戏更新太快，如出现游戏链接打不开请联系客服更新） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '像素世界',
        'desc': '',
        'url': 'https://tt-1256600868.cos.ap-chengdu.myqcloud.com/free/pixelworld/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '像素世界 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这关有点狗',
        'desc': '',
        'url': 'https://dianzichengying.com/game/zgydg/web-mobile/index1.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这关有点狗 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '欢乐解压玩具（加载慢需要5~15秒，请耐心等待）',
        'desc': '',
        'url': 'https://cooperation.pailedi.com/web2/hgd/wxjywj/gm/v1/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '欢乐解压玩具（加载慢需要5~15秒，请耐心等待） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '游游爱收纳',
        'desc': '',
        'url': 'https://www.youhaowankeji.cn/miniGame/youyouaishouna/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '游游爱收纳 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '老六大闯关',
        'desc': '',
        'url': 'https://cdn.antplay888.com/LegoBlocks3D/v2.0.0/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '老六大闯关 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '翻个大饼',
        'desc': '',
        'url': 'https://test2-1258404770.file.myqcloud.com/test-game/MoMing/fgdb3/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '翻个大饼 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '不服咱就碰（加载慢需要5~15秒，请耐心等待）',
        'desc': '',
        'url': 'https://jyxc.shla8.com/game/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '不服咱就碰（加载慢需要5~15秒，请耐心等待） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '一玩一个不吱声（进入会黑屏5-10秒耐心等待即可）',
        'desc': '',
        'url': 'https://yx.pay2031.com/YWYGBKS/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '一玩一个不吱声（进入会黑屏5-10秒耐心等待即可） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '气球爆爆乐',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/ganshaojun/balloonFly/webgl5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '气球爆爆乐 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开心冲冲关',
        'desc': '',
        'url': 'https://res.game.7to.cn/gameres/pgame2/kxccg/kxccg0731/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开心冲冲关 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '镶钻高手（进入会白屏20-25秒耐心等待即可）',
        'desc': '',
        'url': 'https://aaa.puffergames.com/GameServerData2/Unity/webgl_xzgs/webgl_xzgs/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '镶钻高手（进入会白屏20-25秒耐心等待即可） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '螺丝消消看（进入会黑屏5-10秒耐心等待即可）',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/jiangnengren/ScrewOut/NoAd/20240730_3/NoAd/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '螺丝消消看（进入会黑屏5-10秒耐心等待即可） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '解压日记（加载慢需要5~15秒，请耐心等待）',
        'desc': '',
        'url': 'http://h5.sm.deniulor.com/u_digimerge/h5_2/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '解压日记（加载慢需要5~15秒，请耐心等待） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '金钱豹富',
        'desc': '',
        'url': 'https://cl-minigame.chuanglinggame.com/zqndd/h5/jqbf/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '金钱豹富 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '从娃抓起（进入会白屏15-20秒耐心等待即可）',
        'desc': '',
        'url': 'https://res.wqop2018.com/partner/hzdy/lxcb/wwj/webglWWJ_WX_0705A/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '从娃抓起（进入会白屏15-20秒耐心等待即可） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '食神火锅/火锅消不停',
        'desc': '',
        'url': 'https://tos.qwpo2018.com/mp/game/web/gm/700cfe333bb7dd5b8b1d18fcb31cf8d6/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '食神火锅/火锅消不停 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '神奇大游戏',
        'desc': '',
        'url': 'https://cdn-najia.cygame666.cn/dls/preview/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '神奇大游戏 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '天才少年（进入会白屏20-25秒耐心等待即可）',
        'desc': '',
        'url': 'https://res.wqop2018.com/partner/hzdy/zdcdb/noads/test5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '天才少年（进入会白屏20-25秒耐心等待即可） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '快让我上车',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/zhuangchenyang/WaitBus/webgl/1.0.12/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '快让我上车 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '修勾快递（进入会白屏10-15秒耐心等待即可）',
        'desc': '',
        'url': 'https://xiugou.76y.com/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '修勾快递（进入会白屏10-15秒耐心等待即可） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小小生存队',
        'desc': '',
        'url': 'https://game2.sfplay.net/ClimbTower2D/v1.0.2/v2',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小小生存队 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '摸鱼水族馆',
        'desc': '',
        'url': 'https://qtweb.qtjoy.com/games/AquariumLand/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '摸鱼水族馆 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '猎梦前哨战',
        'desc': '',
        'url': 'https://game2.sfplay.net/CatSentinelHP/daoshi/v1',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '猎梦前哨战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '鹅鸭大作战',
        'desc': '',
        'url': 'https://cdn-res.nagagame.net/test/bb/1/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '鹅鸭大作战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '就爱炸炸炸',
        'desc': '',
        'url': 'https://cocos-4gxdj2aj4ef4821e-1324759429.tcloudbaseapp.com/zlgz/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '就爱炸炸炸 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小心病毒',
        'desc': '',
        'url': 'https://www.higame.geek-meta.com/develop2/CarefulVirus/h5/v1.0/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小心病毒 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '不想玩了',
        'desc': '',
        'url': 'https://prod.sumaokeji.com/h5/test1/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '不想玩了 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '谁是冠军（进入会黑屏5-10秒耐心等待即可）',
        'desc': '',
        'url': 'https://aaa.puffergames.com/GameServerData2/unity/unity_lshjy/webgl_ssgj/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '谁是冠军（进入会黑屏5-10秒耐心等待即可） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '拯救大师傅',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/28004/zjdsj_web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '拯救大师傅 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超级大比拼（进入会黑屏5-10秒耐心等待即可）',
        'desc': '',
        'url': 'https://tos.qwpo2018.com/mp/game/web/gm/aa0be7829b5322d0fac213008c412eb9/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超级大比拼（进入会黑屏5-10秒耐心等待即可） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '疯狂爱烧脑（进入会白屏5-10秒耐心等待即可）',
        'desc': '',
        'url': 'https://www.joyhearttech.com/dy/FamilyBonds/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '疯狂爱烧脑（进入会白屏5-10秒耐心等待即可） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '不服咱碰碰（加载慢需要5~15秒，请耐心等待）',
        'desc': '',
        'url': 'https://jyxc.shla8.com/game/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '不服咱碰碰（加载慢需要5~15秒，请耐心等待） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '镜之边缘',
        'desc': '',
        'url': 'https://eayew.com/resource/web/mirror_edge/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '镜之边缘 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '版本1',
        'desc': '',
        'url': 'https://cdn-zhuadae.lanfeitech.com/dy/H5/prod/html/7.0/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '版本1 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '版本2',
        'desc': '',
        'url': 'https://cdn-zhuadae.lanfeitech.com/dy/H5/prod/html/1.10/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '版本2 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '版本3',
        'desc': '',
        'url': 'https://cdn-zhuadae.lanfeitech.com/dy/H5/prod/html/6.1QJUOTB/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '版本3 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '版本4',
        'desc': '',
        'url': 'https://cdn-zhuadae.lanfeitech.com/dy/H5/prod/html/2.0/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '版本4 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我不想重生啊',
        'desc': '',
        'url': 'https://res.wqop2018.com/zhise/wbxcsa/15adea56bb59955f/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我不想重生啊 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我来跑步',
        'desc': '',
        'url': 'https://file-loseweight-dy.jiutaikeji.net/wx/loseweight_h5/v1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我来跑步 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '表情你来猜',
        'desc': '',
        'url': 'https://www.hnxyy.fun/gameDemo/emote/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '表情你来猜 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '冲关小队',
        'desc': '',
        'url': 'https://game2.sfplay.net/AddingFunChallenge/v4',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '冲关小队 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '遇见童话',
        'desc': '',
        'url': 'https://res.wqop2018.com/partner/zhld/yjth/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '遇见童话 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '新猫咪前哨站',
        'desc': '',
        'url': 'https://game2.sfplay.net/CatShotRogou/v1.0.0/v2',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '新猫咪前哨站 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我托儿索贼溜/最强手速传说（进入会黑屏10-15秒耐心等待即可）',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/244_1723513047584/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我托儿索贼溜/最强手速传说（进入会黑屏10-15秒耐心等待即可） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '第一次亲密接触',
        'desc': '',
        'url': 'https://csgames-1302074099.file.myqcloud.com/nixi/v1/web/dr4/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '第一次亲密接触 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '无敌射手',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/noadgame/wudisheshou/20240807/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '无敌射手 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '干了个饭',
        'desc': '',
        'url': 'https://res.kampfiregames.cn/chef/web6/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '干了个饭 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '解压切切乐',
        'desc': '',
        'url': 'https://cdn-najia.cygame666.cn/majiang/webgl/new/1.0.9/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '解压切切乐 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '疯狂小兵',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/sandbox3/TPDG/zqxb/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '疯狂小兵 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '来解压啦',
        'desc': '',
        'url': 'https://changshazhise01-1254961065.cos.ap-guangzhou.myqcloud.com/H5/ljylNew/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '来解压啦 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '校门口文具店',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/180_1723709662217/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '校门口文具店 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '合成没完了',
        'desc': '',
        'url': 'https://oss.tobetopone.com/h5/hcmwl/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '合成没完了 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超凡智商',
        'desc': '',
        'url': 'https://changshazhise01-1254961065.cos.ap-guangzhou.myqcloud.com/cp/tt_wzwz/chaofanzhishang1.0.0/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超凡智商 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '逃离五指山（进入会黑屏10-15秒耐心等待即可）',
        'desc': '',
        'url': 'http://shisuiwang.top/tlwzs/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '逃离五指山（进入会黑屏10-15秒耐心等待即可） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开局一颗蛋',
        'desc': '',
        'url': 'https://game2.sfplay.net/chicken/v13/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开局一颗蛋 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '最强小兵',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/sandbox3/TPDG_bagfight/zqxb/web-mobile/index.html?_t=17181937204',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '最强小兵 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '全民烧脑大挑战',
        'desc': '',
        'url': 'https://cdn.198434.com/cli/H5/InterlockingCocos/?t=1719383305451',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '全民烧脑大挑战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '炫斗奇兵（进入游戏射箭背景会黑屏10-15秒耐心等待即可）',
        'desc': '',
        'url': 'https://game2.sfplay.net/CatShot/v1.0.3_Ver.gm/v2',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '炫斗奇兵（进入游戏射箭背景会黑屏10-15秒耐心等待即可） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小小挖矿记',
        'desc': '',
        'url': 'https://game2.sfplay.net/minng3d/v1/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小小挖矿记 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '辣了么卷饼（加载慢需要15~30秒，请耐心等待）',
        'desc': '',
        'url': 'https://shiwan-5ggvtzoh11becc8a-1251260145.tcloudbaseapp.com/shaweima/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '辣了么卷饼（加载慢需要15~30秒，请耐心等待） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '辣了么卷饼（加载慢需要15~30秒，请耐心等待）',
        'desc': '备用链接',
        'url': 'https://ysxxtech.com/nodeserver/shaweima/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '辣了么卷饼（加载慢需要15~30秒，请耐心等待） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '致富赢家',
        'desc': '',
        'url': 'https://cdn.xingmiles.cn/minigame/h5/pig/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '致富赢家 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '魔法自走棋',
        'desc': '',
        'url': 'https://cdn.greatgood666.com/WebGame/YXWD_0412/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '魔法自走棋 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '荒岛大作战',
        'desc': '',
        'url': 'https://cdn.rewanyouxi.com/games/link/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '荒岛大作战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我最无敌',
        'desc': '',
        'url': 'https://tos.qwpo2018.com/mp/game/web/gm/dbbb27b6ef74b23bd2a145f0b8b16878/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我最无敌 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开局一只虫',
        'desc': '',
        'url': 'http://debug.pumpkinheadgame.online/HyperVenom/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开局一只虫 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '草根翻身记',
        'desc': '',
        'url': 'https://ztyxyx.tanyu.mobi/cxwl/P911_masterman/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '草根翻身记 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '聪明的开局',
        'desc': '',
        'url': 'https://game.csquyou.com/UnscrewRemove11/live.html?v=1.0.0',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '聪明的开局 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我坐哪里',
        'desc': '',
        'url': 'https://qcdn.bdoggame.com/ttgame/findSeat/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我坐哪里 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '末日生还者',
        'desc': '',
        'url': 'https://res.cjs001.com/h5/DuskWarZ/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '末日生还者 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '鸡哔猎梦者/魔兽进化论',
        'desc': '',
        'url': 'http://littlegame.tomato123.cn/msjhl/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '鸡哔猎梦者/魔兽进化论 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '十个小目标',
        'desc': '',
        'url': 'https://hscdn1.quanmin-game.com/game/DreamOilfield/zijie_sgxmb/game/test/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '十个小目标 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '一笔连完/水滴连连消',
        'desc': '',
        'url': 'https://changshazhise01-1254961065.cos.ap-guangzhou.myqcloud.com/cp/tt_wzwz/shuidilianlianxiao/v1.0/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '一笔连完/水滴连连消 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '大佬来了',
        'desc': '',
        'url': 'https://debug.pumpkinheadgame.online/SoulMage/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '大佬来了 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '药水骑士',
        'desc': '',
        'url': 'https://bhr.yudiangame.vip/ysqsGmWeb4/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '药水骑士 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '放置我贼溜（第一次进不去就退出多进几次）',
        'desc': '',
        'url': 'https://debug.pumpkinheadgame.online/Stone/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '放置我贼溜（第一次进不去就退出多进几次） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '反转电玩厅',
        'desc': '',
        'url': 'https://qcdn.bdoggame.com/ttgame/reversePlayland/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '反转电玩厅 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '魔兽进化论2',
        'desc': '',
        'url': 'https://cdn17.tomato123.cn/msjhlOld2/web/104/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '魔兽进化论2 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '吃货小恐龙',
        'desc': '',
        'url': 'https://res.xcx.snsfun.com/chxkl0805/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '吃货小恐龙 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '悟空降魔记',
        'desc': '',
        'url': 'http://gameres.tinysnet.com/diandian/web/v2.0.1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '悟空降魔记 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '全民烧脑新版',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/braintalantSequel/h5_daren/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '全民烧脑新版 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '装修改造家',
        'desc': '',
        'url': 'https://tos.qwpo2018.com/mp/game/web/gm/a4d99ef61fe1dae5513e7b8b36d11e1d/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '装修改造家 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '战争超进化',
        'desc': '',
        'url': 'https://game2.sfplay.net/SuperEvolutionQ/v1.0.1/v2',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '战争超进化 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '踩色大作战',
        'desc': '',
        'url': 'https://gametos.keepmobi.com/web-games/cai-se-da-zuo-zhan/v1.0.7/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '踩色大作战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '重生之亿万富豪',
        'desc': '',
        'url': 'https://cdn.zqygame.com/testGame/cssn_outtest_1.0.0_noad/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '重生之亿万富豪 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '逆境突围（加载慢需要25~30秒，请耐心等待）',
        'desc': '',
        'url': 'https://game.qi-guo.cn/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '逆境突围（加载慢需要25~30秒，请耐心等待） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超级消除王（加载慢需要15~25秒，请耐心等待）',
        'desc': '',
        'url': 'https://aaa.puffergames.com/GameServerData2/Unity/unity_cjxcw/cjxcw17/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超级消除王（加载慢需要15~25秒，请耐心等待） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超级消除王（加载慢需要15~25秒，请耐心等待）',
        'desc': '备用链接',
        'url': 'https://res.wqop2018.com/partner/hzdy/cjxcw/hgxx3/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超级消除王（加载慢需要15~25秒，请耐心等待） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '穿越寻宝记',
        'desc': '',
        'url': 'http://47.106.185.161:8080/historytest/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '穿越寻宝记 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '养猪大亨',
        'desc': '',
        'url': 'https://daren.glifegame.com/yzdh/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '养猪大亨 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '矿工挖呀挖',
        'desc': '',
        'url': 'https://game2.sfplay.net/minng3d/v3/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '矿工挖呀挖 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '最牛剑客',
        'desc': '',
        'url': 'https://demo2.9999le.com/dbjzxidng/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '最牛剑客 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑袋想秃了',
        'desc': '',
        'url': 'https://changshazhise01-1254961065.cos.ap-guangzhou.myqcloud.com/zhise/ndxtl/20240407_2/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑袋想秃了 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '收纳天才',
        'desc': '',
        'url': 'https://testupdate.chutaonet.cn/collect/web_game/web-sntc/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '收纳天才 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开局一颗蛋动物',
        'desc': '',
        'url': 'https://game2.sfplay.net/ReleaseMNQ/dy/v1.0.7/v1',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开局一颗蛋动物 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '颜色大作战',
        'desc': '',
        'url': 'https://voodoos.volc.landintheair.com/ColorBattleNoAds/NoAds/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '颜色大作战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '藏不住的档案',
        'desc': '',
        'url': 'https://file-redmoon.kidikidi.net/online/promote/h5/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '藏不住的档案 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '活下去老铁',
        'desc': '',
        'url': 'https://tos.qwpo2018.com/mp/game/web/gm/1516ddbf7f00965da9a3014f52f7d043/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '活下去老铁 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '神奇大游戏2',
        'desc': '',
        'url': 'https://qtweb.qtjoy.com/test/sqdyx/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '神奇大游戏2 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '冲吧小兵/闪击派对',
        'desc': '',
        'url': 'https://changshazhise01-1254961065.cos.ap-guangzhou.myqcloud.com/H5/sjpd/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '冲吧小兵/闪击派对 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '民间怪谈档案',
        'desc': '',
        'url': 'https://youxipic.88090.com/game168/test/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '民间怪谈档案 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '拔了个罐',
        'desc': '',
        'url': 'https://incubator-static.easygame2021.com/screw-puzzle/guest/345/webpackage/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '拔了个罐 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我不想重生啊/我的重生日记',
        'desc': '',
        'url': 'https://res.wqop2018.com/zhise/wbxcsa/15adea56bb59955f/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我不想重生啊/我的重生日记 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '黑洞入侵',
        'desc': '',
        'url': 'https://jcnq5lvg200c.feishu.cn/wiki/T0cKwPMMoiII2lk16EbcY6G2nKc?from=from_copylink',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '黑洞入侵 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我要做网红',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/28022/web/1.0.1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我要做网红 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '闯关大聪明/谁是消除王',
        'desc': '',
        'url': 'https://res.wqop2018.com/zhise/zgnbxls/gm777/005/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '闯关大聪明/谁是消除王 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '抖个腿子',
        'desc': '',
        'url': 'https://littlegame.tomato123.cn/doutui/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '抖个腿子 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '烧脑高高手',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/noadgame/ScrewSort/241121/web-mobile/index.html?_refluxos=a10',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '烧脑高高手 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '隐秘的原罪12345678',
        'desc': '',
        'url': 'https://file-ymdyz-cdn.kidikidi.net//h5test/ym1-web-test/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '隐秘的原罪12345678 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '隐秘的原罪12345678',
        'desc': '',
        'url': 'https://file-ymdyz-cdn.kidikidi.net//h5test/ym2-web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '隐秘的原罪12345678 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '隐秘的原罪12345678',
        'desc': '',
        'url': 'https://file-ymdyz-cdn.kidikidi.net//h5test/ym3-web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '隐秘的原罪12345678 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '隐秘的原罪12345678',
        'desc': '',
        'url': 'https://file-ymdyz-cdn.kidikidi.net//h5test/ym4-web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '隐秘的原罪12345678 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '隐秘的原罪12345678',
        'desc': '',
        'url': 'https://file-ymdyz-cdn.kidikidi.net//h5test/ym5-web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '隐秘的原罪12345678 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '隐秘的原罪12345678',
        'desc': '',
        'url': 'https://file-ymdyz-cdn.kidikidi.net//h5test/ym6-web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '隐秘的原罪12345678 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '隐秘的原罪12345678',
        'desc': '',
        'url': 'https://file-ymdyz-cdn.kidikidi.net//h5test/ym7-web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '隐秘的原罪12345678 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '隐秘的原罪12345678',
        'desc': '',
        'url': 'https://file-ymdyz-cdn.kidikidi.net//h5test/ym8-web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '隐秘的原罪12345678 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '贪吃蛇世界/贪吃蛇精英',
        'desc': '',
        'url': 'https://file.gugudang.com/res/down/public/p_tanchishe/web-mobile/lts/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '贪吃蛇世界/贪吃蛇精英 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '梦幻奇遇记',
        'desc': '',
        'url': 'http://h5.xiaoyouxi.co/trainminer/h50918/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '梦幻奇遇记 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '黑子别想跑/守个球啊',
        'desc': '',
        'url': 'https://littlegame.tomato123.cn/TheBlack/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '黑子别想跑/守个球啊 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '进击吧英雄',
        'desc': '',
        'url': 'https://game-res.tos-cn-beijing.volces.com/web-games/jin-ji-ba-ying-xiong/1.0.6/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '进击吧英雄 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '本宫重生了/卸甲归田',
        'desc': '',
        'url': 'https://renyousome.renyouwangluo.cn/remoteGame/bgcsl_drwg/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '本宫重生了/卸甲归田 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '画纸弹兵',
        'desc': '',
        'url': 'https://game2.sfplay.net/Rolling_Legions/v1.0.0/v5/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '画纸弹兵 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '城堡逃生',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/peiruitao/KingEscape/NoAD/12.3/V2/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '城堡逃生 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '皇家守卫军',
        'desc': '',
        'url': 'https://hiy75m8vz11.feishu.cn/wiki/UGFGwJyTripHhok1ne3cNGyqn7c',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '皇家守卫军 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超神打工仔',
        'desc': '',
        'url': 'https://w.jshshsj.fit/powan/ads-free/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超神打工仔 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '合成金铲子',
        'desc': '',
        'url': 'http://h5.sm.deniulor.com/mergeminers/web_normal/20240826_1/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '合成金铲子 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '大唐诡案录',
        'desc': '',
        'url': 'https://xiaoyouxi.tyoufun.com/puzzle14/zbgal/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '大唐诡案录 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '帝王养成记',
        'desc': '',
        'url': 'https://mahjong.wqmss.online/H5/dwycj/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '帝王养成记 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '最强冲关小队',
        'desc': '',
        'url': 'https://game2.sfplay.net/swzc/v1.0.0/v4/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '最强冲关小队 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '你来打我啊',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/28023/web/1.0.1/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '你来打我啊 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '热血英雄团',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/270_1732275996152/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '热血英雄团 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '夺宝高手',
        'desc': '',
        'url': 'https://tos.qwpo2018.com/mp/game/web/gm/6a6d81a456550a3346a5368232323e77/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '夺宝高手 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '打到100关',
        'desc': '',
        'url': 'https://www.joyhearttech.com/blood/Coins/Web/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '打到100关 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '眼神真不错',
        'desc': '',
        'url': 'https://u.yigomob.com/sl/yszbc',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '眼神真不错 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '疯狂黑洞',
        'desc': '',
        'url': 'https://homa.ali.landintheair.com/AttackHole/noad/Noad/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '疯狂黑洞 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '洗车之王',
        'desc': '',
        'url': 'https://mini.ssflashgo.com//stonesh/v-lez/CarWash/web/external_link/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '洗车之王 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '最强进化',
        'desc': '',
        'url': 'https://cdn.cdlionhead.com/minigame/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '最强进化 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '疯狂军团',
        'desc': '',
        'url': 'https://abc.szyqhd.com/web/cslj/fkjt/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '疯狂军团 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开了个医院',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/250_1733713004560/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开了个医院 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消箭头',
        'desc': '',
        'url': 'http://47.108.200.73/WebGames/ArrowClear/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消箭头 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '疯狂消不停',
        'desc': '',
        'url': 'https://aliyun.umgame.cn/minigame_preview/10687/1.0.0/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '疯狂消不停 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '奥特曼王者对决',
        'desc': '',
        'url': 'https://bucket.hnhcgx.cn/atmres/iaa_whiteh5/v2/index.html?u_token=1111',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '奥特曼王者对决 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小狗过不去',
        'desc': '',
        'url': 'http://8.154.38.128/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小狗过不去 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '部落世界',
        'desc': '',
        'url': 'https://www.leshanggame.com/blsj_web_versions/webv01/index.html?ma_callerProcessIdentify=%3AminiappX&ma_callbackId=6&disable_auto_expose=1&enable_webview_select_search=1&need_out_animation=right&font_scale=1.0',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '部落世界 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '堆叠世界（食物）',
        'desc': '',
        'url': 'https://test.yyhd.cn/DumplingTest/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '堆叠世界（食物） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '堆叠世界（成语）',
        'desc': '',
        'url': 'https://res.wqop2018.com/partner/wjz/ddsj/WebGLPlay/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '堆叠世界（成语） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '堆叠世界（小人）',
        'desc': '',
        'url': 'https://res.wqop2018.com/partner/hzdy/lxcb/ylyxc/webgl/BBXRWeb_DY_0920/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '堆叠世界（小人） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我脑子特别灵',
        'desc': '',
        'url': 'https://h5.cjs001.com/game/LianLianKan/20241213/index.html?ma_callerProcessIdentify=%3AminiappX&ma_callbackId=4&disable_auto_expose=1&enable_webview_select_search=1&need_out_animation=right&font_scale=1.0',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我脑子特别灵 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这真有点强',
        'desc': '',
        'url': 'https://h5.cjs001.com/game/ThreadFill/DouYin_Twin_WebGL_V1/Release/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这真有点强 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '灵镜救星',
        'desc': '',
        'url': 'https://game-static.weincloud.com/dungelot/h5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '灵镜救星 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '吉他无限弹',
        'desc': '',
        'url': 'https://cdn.hiluluke.com/noad/noad/game.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '吉他无限弹 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '根本消不完',
        'desc': '',
        'url': 'https://liuzhaoling.com/lianlian/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '根本消不完 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消除大挑战',
        'desc': '',
        'url': 'https://obf-vip.com/game/mp/?_refluxos=a10',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消除大挑战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '合了个合',
        'desc': '',
        'url': 'https://pub.selpay.cn/games/hlgh/na1/index.html?_refluxos=a10',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '合了个合 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '三更',
        'desc': '',
        'url': 'https://xiaoyouxi.tyoufun.com/puzzle22/sgzb/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '三更 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '保卫猪猪',
        'desc': '',
        'url': 'https://oss.pppig.cc/piggy/dy/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '保卫猪猪 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我开炮贼溜/召唤小兵/小兵来一炮',
        'desc': '',
        'url': 'https://szj.txhy1699.com/web_bbzombie/240920/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我开炮贼溜/召唤小兵/小兵来一炮 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑壳贼好使',
        'desc': '',
        'url': 'https://jzxcdn.jzxgame.com/jzxhy_wzyx/nkzhs/zbwg_241221Jdas/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑壳贼好使 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '猛鬼教室/玩了又玩',
        'desc': '',
        'url': 'https://antplay888.com/LucklyHero/ry/1/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '猛鬼教室/玩了又玩 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '卡皮巴拉',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/noadgame/carScrew2d/20241126/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '卡皮巴拉 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '重拳格斗',
        'desc': '',
        'url': 'https://cooperation.pailedi.com/web2/dingbowen/zqgd/daren/v2/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '重拳格斗 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消消嘉年华',
        'desc': '',
        'url': 'https://tos.qwpo2018.com/mp/game/web/gm/871b34ba11479f264b4cce9ccc11d218/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消消嘉年华 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消了个消啊/你聪明吗/看谁能通关（加载慢需要15~30秒，请耐心等待）',
        'desc': '',
        'url': 'https://res.wqop2018.com/partner/hzdy/lxcb/ver0.0.4_20240607/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消了个消啊/你聪明吗/看谁能通关（加载慢需要15~30秒，请耐心等待） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消了个消啊/你聪明吗/看谁能通关（加载慢需要15~30秒，请耐心等待）',
        'desc': '',
        'url': 'https://res.wqop2018.com/partner/hzdy/lxcb/ylyxc/webgl/Web_WX_0627E/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消了个消啊/你聪明吗/看谁能通关（加载慢需要15~30秒，请耐心等待） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '爆笑侦探社',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/hzwz3/otherH5/bxzts/index.html?111',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '爆笑侦探社 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '筑梦空间',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/28020/Web/1.0.7/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '筑梦空间 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '筑梦之旅/奇妙的收纳',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/28008/web/1.0.4/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '筑梦之旅/奇妙的收纳 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '向猛鬼开炮',
        'desc': '',
        'url': 'https://cooperation.pailedi.com/web2/wuff/tower-defence/demo/v31/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '向猛鬼开炮 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '秀到起飞',
        'desc': '',
        'url': 'https://www.hnxyy.fun/gameDemo/eqshow/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '秀到起飞 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '就挺秃然的',
        'desc': '',
        'url': 'https://cl-game-jttrd.chuanglinggame.com/i1t3ycU/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '就挺秃然的 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '西游护卫队/疯狂闯关者',
        'desc': '',
        'url': 'https://cdngame.atomgameteam.com/minigame/game/bbfight/index.html?version=325432',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '西游护卫队/疯狂闯关者 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '倒球冲冲冲',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/peiruitao/dqccc/NoAD/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '倒球冲冲冲 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超级消除秀（瓶子）',
        'desc': '',
        'url': 'https://aaa.puffergames.com/GameServerData2/Unity/webgl_cjxcx/webgl_cjxcx4/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超级消除秀（瓶子） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超级消除秀（螺丝）',
        'desc': '',
        'url': 'https://aaa.puffergames.com/GameServerData2/Unity/zs_Test3/ZS_NailNoAds/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超级消除秀（螺丝） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '去旅行',
        'desc': '',
        'url': 'http://101.200.182.248/shoudongban/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '去旅行 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '挑战我最强',
        'desc': '',
        'url': 'https://lionstudios.ali.landintheair.com/HexaSort/noads/0.1.0/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '挑战我最强 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开个披萨店/一赚到底',
        'desc': '',
        'url': 'https://cdn.moblazer.com/BurgerPlease/web/web1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开个披萨店/一赚到底 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '怎么这么肉',
        'desc': '',
        'url': 'https://cdn.yuanzililiang.cn/GAME/bigbus/web/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '怎么这么肉 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '篮球俱乐部经理',
        'desc': '',
        'url': 'https://res.innofuns.com/k4/basketball/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '篮球俱乐部经理 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '淄淄烧烤店',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_res/game220/daren/v1_201948/webgl/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '淄淄烧烤店 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这个过山车有点快',
        'desc': '',
        'url': 'https://sdk.hwengame.com/IssuerPack/IdleRoller/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这个过山车有点快 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '安静书小姐姐',
        'desc': '',
        'url': 'https://oss.zhejing.tech/webH5/ks-quiet-book/index.html?ma_callerProcessIdentify=%3AminiappX&ma_callbackId=3&disable_auto_expose=1&enable_webview_select_search=1&need_out_animation=right&font_scale=1.0&_refluxos=a',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '安静书小姐姐 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '真香小吃摊',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_res/game237/daren/v1_2021314/webgl/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '真香小吃摊 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '模拟飞行',
        'desc': '',
        'url': 'https://sdk.hwengame.com/IssuerPack/NewAircraftWebGL/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '模拟飞行 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '厉害了我的哥',
        'desc': '',
        'url': 'https://renyousome.renyouwangluo.cn/remoteGame/lhlwdg-dr/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '厉害了我的哥 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '玩的有点水',
        'desc': '',
        'url': 'https://debug.pumpkinheadgame.online/Slime_ZS/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '玩的有点水 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '挪对碰一碰',
        'desc': '',
        'url': 'https://webh5.zhejing.tech/ks-mahjong-move/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '挪对碰一碰 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '百万钓鱼佬',
        'desc': '',
        'url': 'https://cdngame.atomgameteam.com/minigame/game/fishGame/index.html?version=20243452353',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '百万钓鱼佬 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小小兵守卫战',
        'desc': '',
        'url': 'http://120.76.129.18:8810/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小小兵守卫战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '致命偷袭',
        'desc': '',
        'url': 'https://szj.txhy1699.com/web_bbzombie_bt/241230_xr/index_zmtx_white.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '致命偷袭 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '宿管来了',
        'desc': '',
        'url': 'https://sgll-wxcdn.xyx.mmhygame.com/sgll/noad_tt/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '宿管来了 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '（地狱难度版本）',
        'desc': '',
        'url': 'http://debug.pumpkinheadgame.online/SoulMage/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '（地狱难度版本） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '（简单难度版本）',
        'desc': '',
        'url': 'http://debug.pumpkinheadgame.online/SoulMage_Easy/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '（简单难度版本） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '摸鱼小能手',
        'desc': '',
        'url': 'https://hscdn9.quanmin-game.com/burgerplease/WEB/web_qxzcyj/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '摸鱼小能手 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '最难游戏',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/noadgame/linkBlock/20241028_1/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '最难游戏 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我就是传说',
        'desc': '',
        'url': 'https://xcdn.selpay.cn/games2/kxcdeb_no/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我就是传说 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '吞噬进化',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_res/game182/daren/v1_201948/webgl/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '吞噬进化 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '整活达人',
        'desc': '',
        'url': 'https://www.popomons.top/zhenghuo/game46/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '整活达人 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '黑店啊',
        'desc': '',
        'url': 'https://wuyouteam.work/public/web-mobile1234/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '黑店啊 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '强哥致富记',
        'desc': '',
        'url': 'https://oss.firefly.51szyly.cn/ctzw/webxj/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '强哥致富记 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '玩成大师/合了个合/我不是细狗/这题不用猜/智商贼高250/开箱车的二宝/难度飙升/打工没前途/球球无限弹/加油小车车',
        'desc': '',
        'url': 'https://pub.selpay.cn/games/na/game.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '玩成大师/合了个合/我不是细狗/这题不用猜/智商贼高250/开箱车的二宝/难度飙升/打工没前途/球球无限弹/加油小车车 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我眼神无敌',
        'desc': '',
        'url': 'https://cdn.qugukeji.com/Game/WoYanShenWuDi/Web/Debug/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我眼神无敌 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消砖块儿',
        'desc': '',
        'url': 'https://w.jshshsj.fit/xiaozhuankuai/ads-free/002/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消砖块儿 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我进化贼强',
        'desc': '',
        'url': 'https://game2.sfplay.net/IncuBattle/v1.0.1/v1',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我进化贼强 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '民间异闻录',
        'desc': '',
        'url': 'https://xiaoyouxi.tyoufun.com/mjywl/ywlzb/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '民间异闻录 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '从头肝到底',
        'desc': '',
        'url': 'https://xiaojing.niudu.com/PinOutLuosi/web-mobile-ctgdd/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '从头肝到底 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超级吃碰消',
        'desc': '',
        'url': 'https://web.mj.shanhaicl.com/webview/cjcpxh5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超级吃碰消 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '星际战舰',
        'desc': '',
        'url': 'https://ztyxyx.tanyu.mobi/cxwl/BagProj_H5/2501082002/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '星际战舰 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '晚晚的新装',
        'desc': '',
        'url': 'https://game-link.walkpacers.cn:7021/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '晚晚的新装 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '国王逃生',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/peiruitao/gwts/NoAD/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '国王逃生 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '卷王的日常',
        'desc': '',
        'url': 'http://www.dalianchangwan.top:18081/games/bacon/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '卷王的日常 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我要消除呀',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/yangyihui/PourWater/NoAd/012001/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我要消除呀 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '迷宫逃脱2',
        'desc': '',
        'url': 'https://env-00jxhob2x0n7-static.normal.cloudstatic.cn/game/mgtt2/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '迷宫逃脱2 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '拯救国王高难度/英雄计划/拯救国王高解压版/超级解压大王/超级怪手',
        'desc': '',
        'url': 'https://maoyumeng.club/YXJH/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '拯救国王高难度/英雄计划/拯救国王高解压版/超级解压大王/超级怪手 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '疯狂吃掉',
        'desc': '',
        'url': 'https://cos.umgame.cn/minigame_preview/10832/webjump/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '疯狂吃掉 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '疯狂吃掉',
        'desc': '备用链接',
        'url': 'https://cos.umgame.cn/minigame_preview/10832/1.1.83/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '疯狂吃掉 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '草原大作战',
        'desc': '',
        'url': 'https://play.qwplay.cn/caoyuan/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '草原大作战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '极品大乱斗',
        'desc': '',
        'url': 'https://cdngame.atomgameteam.com/minigame/game/bbfight/game.html?version=2',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '极品大乱斗 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '头脑大作战',
        'desc': '',
        'url': 'https://h5.zckcloud.com/h5/cat-park-game-tt/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '头脑大作战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '团团快跑',
        'desc': '',
        'url': 'https://daren.jilaihuyu.com/tuantuankuaipao/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '团团快跑 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '地狱节奏盒子模组',
        'desc': '',
        'url': 'https://cdn.szydtx.com/minigames/testGame/musicBox3/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '地狱节奏盒子模组 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '愤怒的鸡蛋',
        'desc': '',
        'url': 'https://env-00jx4jyg9fu6-static.normal.cloudstatic.cn/games/fndjd/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '愤怒的鸡蛋 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '命运的反转',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/28027/web/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '命运的反转 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '坦克冲一冲',
        'desc': '',
        'url': 'https://game2.sfplay.net/Tank/v1.0.0/v1/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '坦克冲一冲 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小鸡来了',
        'desc': '',
        'url': 'https://cdn.antplay888.com/Doomsday/vryx2.0.17/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小鸡来了 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '字走棋',
        'desc': '',
        'url': 'https://renyounew.renyouwangluo.cn/remoteGame/zzq_jh/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '字走棋 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '空域之王',
        'desc': '',
        'url': 'https://fkwg.xyx.mmhygame.com/ccsproject/airplane/web/1_0_121/index_white.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '空域之王 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '爆改收纳大师',
        'desc': '',
        'url': 'https://static.qttech.top/static/baogaishounadashi/online/h5/edition4/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '爆改收纳大师 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '全军冲锋',
        'desc': '',
        'url': 'https://cdn.yuanzililiang.cn/GAME/thevirusrun/gm/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '全军冲锋 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我玩个啥呢',
        'desc': '',
        'url': 'https://cos.umgame.cn/minigame_remote/minigame/client/peigengame/remote/h5/1.0.14/index.html?time=1737773324834',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我玩个啥呢 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '蹲坑不排队',
        'desc': '',
        'url': 'https://herofight.cn/preview/web/DkbpdMobile',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '蹲坑不排队 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '喵星人爱收纳',
        'desc': '',
        'url': 'https://maoyumeng.cdn.xiaojing.work/chdl/mxrasn/remote/web/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '喵星人爱收纳 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消消果冻',
        'desc': '',
        'url': 'http://101.34.244.181:11451/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消消果冻 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '还有谁',
        'desc': '',
        'url': 'https://aloss.11oi.com/games/hys/202501081/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '还有谁 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消消消爆乐',
        'desc': '',
        'url': 'https://chengyyxdl.leiting.com/web-mobile/MoveCar/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消消消爆乐 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '对对消除',
        'desc': '',
        'url': 'http://101.200.182.248/majhonglive/?_refluxos=a10',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '对对消除 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '百家姓',
        'desc': '',
        'url': 'http://101.200.182.248/100surname/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '百家姓 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '炫彩节奏3D',
        'desc': '',
        'url': 'https://musicgame.xplaymobile.com/Games/MusicColorBall2/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '炫彩节奏3D 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '龙了个龙',
        'desc': '',
        'url': 'https://mini.ssflashgo.com/stonesh/LY/MonsterAttack/web/202501150953/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '龙了个龙 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '从细胞到奇点进化永无止境/烧脑游戏（加载慢需要5~15秒，请耐心等待）',
        'desc': '',
        'url': 'http://cdn.game-meng.com/xiaoyouxi/xb/webgl/v1/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '从细胞到奇点进化永无止境/烧脑游戏（加载慢需要5~15秒，请耐心等待） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '经典解压神器',
        'desc': '',
        'url': 'https://minires.yingtenaier.com/game_show/zhengjiuguogwang/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '经典解压神器 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '兵多多出击',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/28023/web_bddcj/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '兵多多出击 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '节奏模组',
        'desc': '',
        'url': 'https://cos.umgame.cn/minigame_preview/10777/1.1.13webchaojijiachang/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '节奏模组 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '救出小公主',
        'desc': '',
        'url': 'https://demo2.9999le.com/gz/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '救出小公主 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '保你上西天',
        'desc': '',
        'url': 'https://www.lekonghd.cn/tp-sea-war/0.0.1/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '保你上西天 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '就差一丢丢',
        'desc': '',
        'url': 'https://debug.pumpkinheadgame.online/Bacon2D/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '就差一丢丢 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑汁怪好的',
        'desc': '',
        'url': 'https://res.wqop2018.com/zhise/wdndwz/other/nzghd/web/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑汁怪好的 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消除嘉年华',
        'desc': '',
        'url': 'https://update-smallgame.huanyz.com/X7_ZhiShe/CDN/WebGL/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消除嘉年华 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '爆个爆米花',
        'desc': '',
        'url': 'https://cdn.antplay888.com/baoMiHua/2.3/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '爆个爆米花 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '战术小组',
        'desc': '',
        'url': 'https://oss.tobetopone.com/h5/seaBattleH5',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '战术小组 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '干饭哪家强，刀刀厨神',
        'desc': '',
        'url': 'http://47.99.110.60:8080/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '干饭哪家强，刀刀厨神 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '缤纷收纳之旅',
        'desc': '',
        'url': 'https://www.rewanyouxi.com/games/journey/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '缤纷收纳之旅 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '爆笑老铁',
        'desc': '',
        'url': 'https://mini.ssflashgo.com/stonesh/Hilarious_Stroy/web/202501081800/web-mobile/?platformType=Pc_ZhiBo&time=1728973068411',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '爆笑老铁 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消除大闯关',
        'desc': '',
        'url': 'https://idata.igame58.com/h5/CMKJCar-long_dy/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消除大闯关 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '挺进决赛圈',
        'desc': '',
        'url': 'https://res.game.7to.cn/gameres/pgame2/tjjsq/game/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '挺进决赛圈 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '不服来玩/密室消除/一起来玩密室消除',
        'desc': '',
        'url': 'https://www.alyminigame.com/game/ttmsxc/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '不服来玩/密室消除/一起来玩密室消除 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我爱玩弹珠',
        'desc': '',
        'url': 'https://woaiwandanzhu.xinzhiyukeji.cn/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我爱玩弹珠 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '解个压吧',
        'desc': '',
        'url': 'http://findcats.ifireflygame.com/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '解个压吧 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我的休闲时刻',
        'desc': '',
        'url': 'https://oss.renyouwangluo.cn/wdxxsk_dy/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我的休闲时刻 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小羊快上车',
        'desc': '',
        'url': 'https://leqi-1259286428.file.myqcloud.com/games/animal/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小羊快上车 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '麻辣烫达人',
        'desc': '',
        'url': 'https://h5.imagicengine.com/testPrj/MaLaTang/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '麻辣烫达人 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '楼下的火锅店',
        'desc': '',
        'url': 'https://hscdn9.quanmin-game.com/huoguodian/baibao/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '楼下的火锅店 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '做个大聪明',
        'desc': '',
        'url': 'https://res.wqop2018.com/zhise/ptdcg/web_tt/v4/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '做个大聪明 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '变装大逃亡',
        'desc': '',
        'url': 'https://h5.imagicengine.com/testPrj/bianzhuangdataowang_newyear/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '变装大逃亡 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '解压馆/解压馆好玩又有趣',
        'desc': '',
        'url': 'https://qt.szyqhd.com:6001/jieyaguan/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '解压馆/解压馆好玩又有趣 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '像素沙盒/疯狂粉末沙盒',
        'desc': '',
        'url': 'https://cdn.guoyue.games/games/sandbox/web-mobile-wasm-cc/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '像素沙盒/疯狂粉末沙盒 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '卡皮巴拉啊',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/jiangnengren/FarmJamWX/NoAdMode/007/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '卡皮巴拉啊 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '营救女孩/这关消不停',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.net/wb_webview/saveGirlDragon/saveGirlDragon/yjnh/web-mobile/index.html?111=',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '营救女孩/这关消不停 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '连了又连/梦幻对对连/连了个连/连了再连',
        'desc': '',
        'url': 'https://cos.ucpopo.com/llyl/client_web/?openid=o2KX55b3r0fMvESCwVfIMy6FYcP8&sessid=dlz619vr2qccevsw8dhjumgypmyo',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '连了又连/梦幻对对连/连了个连/连了再连 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '挪车大闯关',
        'desc': '',
        'url': 'https://ddwalk-1301030645.cos.ap-guangzhou.myqcloud.com/webgame/ncdcg_noAD/static/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '挪车大闯关 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '诡异研究所',
        'desc': '',
        'url': 'https://youxipic.88090.com/game168/gyyjszb/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '诡异研究所 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '不一般的烧脑',
        'desc': '',
        'url': 'https://scriptmaster-1300577131.cos.ap-nanjing.myqcloud.com/RoomEscape/webTT/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '不一般的烧脑 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '做个拿手菜',
        'desc': '',
        'url': 'https://www.lekonghd.cn/zgnsc/0.6.3/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '做个拿手菜 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '从零开始的计划',
        'desc': '',
        'url': 'https://www.lekonghd.cn/kghd/0.1.0/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '从零开始的计划 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '末世生存战',
        'desc': '',
        'url': 'https://saygames.ali.landintheair.com/GoldRush/NoAds/0.0.3/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '末世生存战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '螺丝小当家',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/peiruitao/ScrewModelAndBus/NoAD/V7/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '螺丝小当家 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '西装暴徒来了',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/269_1740104506691/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '西装暴徒来了 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '莎莎公主梦',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/124_1739502835201/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '莎莎公主梦 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '暴走消除',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/yangyihui/PourWater/NoAd/022003/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '暴走消除 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '全民剧本大师',
        'desc': '',
        'url': 'http://cm.darknight.games/scriptMaster/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '全民剧本大师 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '背水一战',
        'desc': '',
        'url': 'https://game.vsane.com/live/backwatermanu/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '背水一战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '飞刀弹弹弹',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/h5base/hftdtt/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '飞刀弹弹弹 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '别想难倒我游戏手机版',
        'desc': '',
        'url': 'https://herofight.cn/preview/web/NeZhaMobile',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '别想难倒我游戏手机版 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '电脑版',
        'desc': '',
        'url': 'https://herofight.cn/preview/web/NeZhaPC',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '电脑版 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这关真难过',
        'desc': '',
        'url': 'https://cdn-star.soulgame.net.cn/h5/JengaYes/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这关真难过 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '进化大挑战',
        'desc': '',
        'url': 'https://renyounew.renyouwangluo.cn/remoteGame/jhdtz_tt/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '进化大挑战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超级烧脑',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/pluckanail/csj5shn/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超级烧脑 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '动物之星',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/179_1740381633753/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '动物之星 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '极限烧脑王',
        'desc': '',
        'url': 'https://res.wqop2018.com/zhise/jxsnwmy/gm/NPJ0K5URKYRLU1QPG7Q5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '极限烧脑王 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '哪里不同嘛',
        'desc': '',
        'url': 'https://zhitong.szhaicao.com/gwfkg/h5/v2/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '哪里不同嘛 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '破坏大师',
        'desc': '',
        'url': 'http://h5.xiaoyouxi.co/trapmaster/web_h5/2502271143/web-desktop/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '破坏大师 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '冲鸭我的宝',
        'desc': '',
        'url': 'https://game2.sfplay.net/KungFuPenguin/v1.0.0/v2',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '冲鸭我的宝 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '快来打个蛋',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/227_1740647610750/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '快来打个蛋 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开启富豪生活/这个我上我也行/麻辣小媳妇',
        'desc': '',
        'url': 'https://res5.haotgame.com/cu04/static/Xinnixi2/test/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开启富豪生活/这个我上我也行/麻辣小媳妇 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '解锁免广告获得奖励办法看下面链接图片',
        'desc': '',
        'url': 'https://vv88dmufu7t.feishu.cn/wiki/XAySwuc2CiQ3pYkZ0ATch3Z1nkd',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '解锁免广告获得奖励办法看下面链接图片 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '重返花果山',
        'desc': '',
        'url': 'https://www.game123.space/sq_wx/h5/hgs/10Io0%7Cz2i0lo01l0Il01.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '重返花果山 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '模拟美食制作',
        'desc': '',
        'url': 'https://idata.igame58.com/kyxsmallres/MoNiMeiShiPengRen/demo/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '模拟美食制作 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '螺母分类',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/peiruitao/NutSort/WebglPack/V19/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '螺母分类 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '精神牛马',
        'desc': '',
        'url': 'https://game.vsane.com/live/cowhorsemanu',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '精神牛马 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消不完啦',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/zhuangchenyang/IdiomMatch/tt27b55108b881c67807/1.0.4/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消不完啦 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消消世界',
        'desc': '',
        'url': 'https://cdn.game.chot.cn/resource/chot/xxsj_cm/0228/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消消世界 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超级电玩城/开心电玩城/电玩城大亨',
        'desc': '',
        'url': 'https://assets.tinyfun.online/game/sale/super-playground/1.1.4/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超级电玩城/开心电玩城/电玩城大亨 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '倒水不能停',
        'desc': '',
        'url': 'https://env-00jxho2t71i2-static.normal.cloudstatic.cn/daoshui/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '倒水不能停 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '智商够用吗',
        'desc': '',
        'url': 'https://cdn.gzgame99.cn/h5/magicalWords/1.0.0.0/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '智商够用吗 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '轻松来解压',
        'desc': '',
        'url': 'https://cdn.gzgame99.cn/h5/dy_bottle/home.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '轻松来解压 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '战机大闯关',
        'desc': '',
        'url': 'https://game2.sfplay.net/BagFighter_Comic/v1.0.1/v1',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '战机大闯关 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '末日小小队/一起打怪兽/城堡守夜者',
        'desc': '',
        'url': 'https://cdn-xyx-fire.raink.com.cn/9046/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '末日小小队/一起打怪兽/城堡守夜者 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小子很强3d/这活贼解压',
        'desc': '',
        'url': 'https://res7.cjs001.com/h5/SortColorDrawDY/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小子很强3d/这活贼解压 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '你来玩呀/节奏盒子/解压达人/超级电玩赢家',
        'desc': '',
        'url': 'https://cos.umgame.cn/minigame_preview/10780/webjump/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '你来玩呀/节奏盒子/解压达人/超级电玩赢家 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '全都是套路',
        'desc': '',
        'url': 'https://aliyun.umgame.cn/minigame_preview/10132/1.0.6web/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '全都是套路 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '师傅又被抓走啦（黑屏退出重新进几次就好了）',
        'desc': '',
        'url': 'https://dobestapp.oss-cn-hangzhou.aliyuncs.com/app-2/test/js/xymx/tt/daren2/web-desktop/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '师傅又被抓走啦（黑屏退出重新进几次就好了） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '荒岛三兄弟（黑屏退出重新进几次就好了）',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/255_1739327388590/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '荒岛三兄弟（黑屏退出重新进几次就好了） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '最牛挑战',
        'desc': '',
        'url': 'https://gametos.keepmobi.com/web-games/lian-lian-kan/web/3.1.3/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '最牛挑战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '放置探险团',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/270v2_1741316060984/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '放置探险团 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '极限逃生/万万没想到/花光十个亿挑战',
        'desc': '',
        'url': 'https://oss.tobetopone.com/h5/eschaton/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '极限逃生/万万没想到/花光十个亿挑战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '大炮轰猛鬼',
        'desc': '',
        'url': 'https://cooperation.pailedi.com/web2/wuff/tower-defence/demo/v30/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '大炮轰猛鬼 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '轻松拿捏',
        'desc': '',
        'url': 'https://jzxcdn.jzxgame.com/jzxhy_wzyx/qsnn/zbwg_250325WEdf/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '轻松拿捏 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这把拿下',
        'desc': '',
        'url': 'https://sssw-file.singmaan.com/Games/10000/index5.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这把拿下 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '无敌进化战舰',
        'desc': '',
        'url': 'https://game2.sfplay.net/ThunderWarship3D/v1.0.0/v5/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '无敌进化战舰 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '猎杀宿舍',
        'desc': '',
        'url': 'https://kbzl-cdn.xyx.mmhygame.com/kbzl/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '猎杀宿舍 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超级房间',
        'desc': '',
        'url': 'https://cdngame.atomgameteam.com/minigame/game/thqby/index.html?isLiveTest=true&version=0.4.0',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超级房间 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '娱乐圈大亨',
        'desc': '',
        'url': 'https://zuiyou.dw4.cn/h5/minigame/z021_EntertainmentTycoons003/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '娱乐圈大亨 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '隐秘的档案',
        'desc': '',
        'url': 'http://d.glf2ym.cn/Czb5Fw',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '隐秘的档案 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '聪明开局',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/noadgame/carScrew2d/20241025/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '聪明开局 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开局有破碗',
        'desc': '',
        'url': 'https://dev-cdn.jshshsj.fit/qigai/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开局有破碗 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '三国火柴人战神',
        'desc': '',
        'url': 'https://macg-oss.oss-cn-hangzhou.aliyuncs.com/web-kingdom5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '三国火柴人战神 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '矿工挖呀挖/小小运输工/挖矿当老板',
        'desc': '',
        'url': 'https://game2.sfplay.net/minng3d/v3/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '矿工挖呀挖/小小运输工/挖矿当老板 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '猛鬼大厦100层',
        'desc': '',
        'url': 'https://game.haiwanwl.com/mgds100_new/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '猛鬼大厦100层 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '一起找找找',
        'desc': '',
        'url': 'https://tos.qwpo2018.com/mp/game/web/gm/be3c784a5d9df93f0f4cce97d1aa037e/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '一起找找找 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '拿下一座城/炫斗奇兵/纸上守卫战',
        'desc': '',
        'url': 'https://game2.sfplay.net/KinghtFall/v1.0.5/v2/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '拿下一座城/炫斗奇兵/纸上守卫战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '鲨鱼风暴',
        'desc': '',
        'url': 'https://maoyumeng.club/HYTG/web/web-mobile13/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '鲨鱼风暴 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '冲啊大猛男/功夫小子我最牛',
        'desc': '',
        'url': 'https://mixpet-1255466057.cos.ap-shanghai.myqcloud.com/web/dash_hero/web_0425/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '冲啊大猛男/功夫小子我最牛 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '躺平守卫战/入侵异世界/猎梦者小队',
        'desc': '',
        'url': 'https://game2.sfplay.net/CatSentinelHP/TP/v1',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '躺平守卫战/入侵异世界/猎梦者小队 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开箱车的二宝（打开等待几秒左右就开了）',
        'desc': '',
        'url': 'https://xcdn.selpay.cn/games2/kxcdeb_no/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开箱车的二宝（打开等待几秒左右就开了） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超级房间（恐怖）',
        'desc': '',
        'url': 'https://cdngame.atomgameteam.com/minigame/game/thqby/index.html?isLiveTest=true&version=0.4.0.8',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超级房间（恐怖） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '采矿大老板',
        'desc': '',
        'url': 'http://h5.xiaoyouxi.co/trainminer/h50918/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '采矿大老板 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '诡异不合理',
        'desc': '',
        'url': 'https://res5.haotgame.com/cu04/static/guiyibuheli/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '诡异不合理 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '整的害挺好',
        'desc': '',
        'url': 'https://game.hongshunet.com/zhuangmm/zhengdehaitinghao/cs/0.0.14/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '整的害挺好 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '神器打造大师',
        'desc': '',
        'url': 'https://szj.txhy1699.com/web_bbzombie_bt/241217_xr/index_white.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '神器打造大师 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '翡翠大王',
        'desc': '',
        'url': 'http://h5.smallgame.top/fcdw202405171/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '翡翠大王 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '重生练气十万年',
        'desc': '',
        'url': 'https://blsxx.glifegame.com/lianqi/web/1.5.15/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '重生练气十万年 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '疯狂进化兽',
        'desc': '',
        'url': 'https://glxddown.jinji888.cn/cdn/h5game/fkjhs/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '疯狂进化兽 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '最强螺丝王',
        'desc': '',
        'url': 'https://screw.superfantasys.cn/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '最强螺丝王 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '解压我最牛',
        'desc': '',
        'url': 'https://cdn-najia.cygame666.cn/majiang/webgl/1731157275/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '解压我最牛 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '全民摆地摊/明星店长/富婆买买买',
        'desc': '',
        'url': 'https://static-cdn.zhouhy.net/h5/project/qingdu/web/peopleshop/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '全民摆地摊/明星店长/富婆买买买 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '抓鸡大师',
        'desc': '',
        'url': 'https://aliyun.umgame.cn/minigame_preview/10592/1.0.0/build/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '抓鸡大师 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这就很魔性版本一',
        'desc': '',
        'url': 'https://jzxcdn.jzxgame.com/jzxhy_wzyx/zjhmx/zbwg_250324Losd/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这就很魔性版本一 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这就很魔性版本二',
        'desc': '',
        'url': 'https://jzxcdn.jzxgame.com/jzxhy_wzyx/zjhmx/zbwg_250327ZZdA/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这就很魔性版本二 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消除大师傅',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/fengjiajun/ScrewOutBase/SO1014/XCDSFWebGL3/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消除大师傅 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '魔性秀秀秀',
        'desc': '',
        'url': 'https://fkwg.xyx.mmhygame.com/mxxxx/zbwg_250320xjma/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '魔性秀秀秀 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '神兽战场/部落出击',
        'desc': '',
        'url': 'http://womy.abyssblade.com/lucky/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '神兽战场/部落出击 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '怨种兄弟',
        'desc': '',
        'url': 'https://antplay888.com/LucklyHero/ry/1/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '怨种兄弟 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '瞧我这脑子',
        'desc': '',
        'url': 'https://www.yzqgamefun.com/packages/nixirensheng/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '瞧我这脑子 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '奶奶的菜谱',
        'desc': '',
        'url': 'https://res.heigame.com/webRes/GrandmaFoodV2.0/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '奶奶的菜谱 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '天天玩泡泡龙',
        'desc': '',
        'url': 'https://qzz2d.qzzres.com/bubble_bytenew_h5/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '天天玩泡泡龙 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开个供销社',
        'desc': '',
        'url': 'https://www.lekonghd.cn/kggxs/1.5.8/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开个供销社 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '巴士升级战',
        'desc': '',
        'url': 'https://res.sixcube.cn/busarrival_tk/bus/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '巴士升级战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '阿姐鼓',
        'desc': '',
        'url': 'https://xiaoyouxi.tyoufun.com/puzzle19/ajiegu/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '阿姐鼓 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '阿姐鼓3偃师传',
        'desc': '',
        'url': 'https://xiaoyouxi.tyoufun.com/puzzle27/ajgsan/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '阿姐鼓3偃师传 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '阿姐鼓2明王咒',
        'desc': '',
        'url': 'https://xiaoyouxi.tyoufun.com/puzzle25/ajiegu2h5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '阿姐鼓2明王咒 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '地表最强大佬',
        'desc': '',
        'url': 'http://117.50.101.179:8094/uploads/Nd-wglj1/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '地表最强大佬 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '暴躁果汁店',
        'desc': '',
        'url': 'https://game.vsane.com/live/irritablefruitmanu',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '暴躁果汁店 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '勇士守卫战',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/wanglifeng/NoAdGame/Packman/v03131721/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '勇士守卫战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小主攻略',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/130_1741662051579/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小主攻略 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '奇门遁甲',
        'desc': '',
        'url': 'https://xiaoyouxi.tyoufun.com/puzzle26/qmdj/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '奇门遁甲 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '滑梯冲浪',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/1_1742199557840/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '滑梯冲浪 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '楼下的杂货店',
        'desc': '',
        'url': 'https://hscdn9.quanmin-game.com/burgerplease/web_lxdzhd/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '楼下的杂货店 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '全民跳跳',
        'desc': '',
        'url': 'https://zhangyoushijie666.com/webgl/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '全民跳跳 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '探险大玩家',
        'desc': '',
        'url': 'https://cdn.hiluluke.com/noad/txdwj/index2.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '探险大玩家 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '炮炮大作战',
        'desc': '',
        'url': 'http://paopao.duini.com/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '炮炮大作战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '老屋保卫战',
        'desc': '',
        'url': 'https://cooperation.pailedi.com/web2/chenyh/defend80/game/v1.1.0/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '老屋保卫战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '无敌消消消',
        'desc': '',
        'url': 'https://tos.qwpo2018.com/mp/game/web/gm/74c8361b4d8af502dbc2b92cd3e19943/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '无敌消消消 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '怨憎会',
        'desc': '',
        'url': 'https://xiaoyouxi.tyoufun.com/puzzle16/yzh/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '怨憎会 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我的村庄我来守',
        'desc': '',
        'url': 'https://cooperation.pailedi.com/web2/wanglei/bwcz/web/v1.5.01/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我的村庄我来守 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '无尽消消消/乌龟碰碰碰',
        'desc': '',
        'url': 'https://res.wqop2018.com/partner/hzdy/gbzwb/H5_TuetleBlindBox/9_13_1/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '无尽消消消/乌龟碰碰碰 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '重生厂花不好惹',
        'desc': '',
        'url': 'https://cdn.hulumao.top/cs/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '重生厂花不好惹 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '扯个蛋子',
        'desc': '',
        'url': 'https://renyounew.renyouwangluo.cn/remoteGame/cgdz_web/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '扯个蛋子 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开心闯关',
        'desc': '',
        'url': 'https://h5.xiaoyouxi.co/mergearchers/H5-250311/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开心闯关 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '快乐叠一叠',
        'desc': '',
        'url': 'https://h5.cjs001.com/game/CoffeePack/20250305_zytnlb/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '快乐叠一叠 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '城市流浪日记',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/221_1741846597976/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '城市流浪日记 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超级炮台',
        'desc': '',
        'url': 'https://voodoo.ali.landintheair.com/HexDefense/noad/0.0.1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超级炮台 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '速战速决',
        'desc': '',
        'url': 'https://play.refight.cn/findcatweb/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '速战速决 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '背包大闯关',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/wanglifeng/NoAdGame/Packman/v03121048/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '背包大闯关 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我又重生了',
        'desc': '',
        'url': 'https://oss.tobetopone.com/h5/naZhaHaiZhan',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我又重生了 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '寻找闯关大师',
        'desc': '',
        'url': 'https://wovenpicture.zhwxgame.com/v1/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '寻找闯关大师 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这关你行么',
        'desc': '',
        'url': 'https://h5.xiaoyouxi.co/mergearchers/H5-250311/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这关你行么 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '全部都消除',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/noadgame/QuanBuDouXiaoChu/250303_4/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '全部都消除 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '落花洞女',
        'desc': '',
        'url': 'https://xiaoyouxi.tyoufun.com/game160/lhdnh5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '落花洞女 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '粉碎泡泡',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/167_1741343861612/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '粉碎泡泡 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '根本难不倒我',
        'desc': '',
        'url': 'http://keepmobi.com/remote-res/lian-lian-kan/web/changxiang_3.4.25/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '根本难不倒我 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '兄弟们跟我冲/张飞下山',
        'desc': '',
        'url': 'https://www.yzqgamefun.com/packages/zanyaodangdaxia/web/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '兄弟们跟我冲/张飞下山 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '玩了完了',
        'desc': '',
        'url': 'https://cos.umgame.cn/minigame_preview/10132/1.1.92webchaojijiachang/web/index.html?n=%E7%8E%A9%E4%BA%86%E5%AE%8C%E4%BA%86&g=1',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '玩了完了 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '壮士请留步',
        'desc': '',
        'url': 'https://cl-game-pb.chuanglinggame.com/zsqlb/noAd/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '壮士请留步 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '隐藏大师',
        'desc': '',
        'url': 'http://47.92.128.120:18080/ycds3/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '隐藏大师 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '眼神贼好',
        'desc': '',
        'url': 'https://show-1259304626.cos.ap-guangzhou.myqcloud.com/2d%E8%9E%BA%E4%B8%9D/html/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '眼神贼好 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '毛线对对碰',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/28004/mxddp_web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '毛线对对碰 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '鹅鹅出击',
        'desc': '',
        'url': 'https://chengyyxdl.leiting.com/web-mobile/goose/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '鹅鹅出击 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '无限闯关王',
        'desc': '',
        'url': 'https://game2.sfplay.net/braveShoot/v1.0.0/v5',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '无限闯关王 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '解压玩具',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.net/wb_webview/punchme/h5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '解压玩具 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这关太难过',
        'desc': '',
        'url': 'https://puzzle-cats.ifireflygame.com/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这关太难过 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '挖宝大亨',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/115_1742898315476/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '挖宝大亨 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这关超难的',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/zhuangchenyang/ColorBlockJam/tt11b2670f8e846f1f07/1.0.3/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这关超难的 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小猫老弟',
        'desc': '',
        'url': 'http://119.91.227.168/xmld/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小猫老弟 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '换弹冲冲冲',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/224_1741687138840/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '换弹冲冲冲 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '全民最强烧脑',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/28029/web/1.0.1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '全民最强烧脑 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '搭了个桥',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/8_1742183554505/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '搭了个桥 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '难住宝宝了',
        'desc': '',
        'url': 'https://h5.cjs001.com/game/SkyPush/20250313/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '难住宝宝了 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '雪场滚个球',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/5_1743155545415/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '雪场滚个球 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小小卡皮巴拉/消个水豚',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/noadgame/carScrew2d/long20250311/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小小卡皮巴拉/消个水豚 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '扫雷大挑战/卡皮巴拉消消消',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/noadgame/capybara/0311/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '扫雷大挑战/卡皮巴拉消消消 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我的狗头/救救狗狗',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/brain6/myDog/web/1.0.0/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我的狗头/救救狗狗 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这关真上头/卡皮巴拉连连消',
        'desc': '',
        'url': 'https://tos.qwpo2018.com/mp/game/web/inside/c1bae15e465112c7f8010e134d094174/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这关真上头/卡皮巴拉连连消 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这关真上头',
        'desc': '',
        'url': 'https://res.kampfiregames.cn/moveBrick/web1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这关真上头 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '正常玩无广链接',
        'desc': '',
        'url': 'https://cos.umgame.cn/minigame_preview/10909/h5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '正常玩无广链接 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '指上消不停',
        'desc': '',
        'url': 'https://game2.sfplay.net/XiaoXiaoLe/v1.0.0/v2/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '指上消不停 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '疯狂脑力王',
        'desc': '',
        'url': 'https://mini.ssflashgo.com/stonesh/wll/fknlw/web/2024_1121_1624/web-mobile/?platformType=Pc_DuanShiPing&time=1732591952752',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '疯狂脑力王 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '打螺丝大师',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/noadgame/ScrewWood/241118/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '打螺丝大师 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '英雄训练师',
        'desc': '',
        'url': 'https://xy-team3-res-test.hortorgames.com/RushProject/webgl/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '英雄训练师 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '通关去咯',
        'desc': '',
        'url': 'https://idata.igame58.com/h5/bljy/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '通关去咯 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '菜你就多练',
        'desc': '',
        'url': 'https://jzxcdn.jzxgame.com/jzxhy_wzyx/cnjdl/zbwg_20250403HSDa/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '菜你就多练 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '无敌头脑高手',
        'desc': '',
        'url': 'https://res5.haotgame.com/cu04/static/wuditounaogaoshou_dy/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '无敌头脑高手 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '不服来啊',
        'desc': '',
        'url': 'https://aliyun.umgame.cn/minigame_preview/10908/1.0.2/gear-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '不服来啊 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '一切到底',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/118_1742885185530/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '一切到底 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我真没想重生',
        'desc': '',
        'url': 'https://wsdw.dengdengkeji.com/dog/wzmxcs/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我真没想重生 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '领土守卫者',
        'desc': '',
        'url': 'https://res.sjzgxwl.com/pingce/jiuyuangear/12/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '领土守卫者 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '猎梦空间',
        'desc': '',
        'url': 'https://3d-game.chuanglinggame.com/HideSeek/NoAds/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '猎梦空间 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '征服小小世界',
        'desc': '',
        'url': 'https://crazylabs.ali.landintheair.com/MagicFighting/NoAd/0.0.2/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '征服小小世界 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '功夫三国',
        'desc': '',
        'url': 'https://sanguo-cdn.youshuitd.com/youwo/web_gm/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '功夫三国 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '萌宠点点消',
        'desc': '',
        'url': 'https://idata.igame58.com/h5/bljy/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '萌宠点点消 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '连线真刺激',
        'desc': '',
        'url': 'https://minigame.liuchuanyang.com/preview/2501/lianxianzhenciji/0.2.4/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '连线真刺激 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开个便利店',
        'desc': '',
        'url': 'https://file.gugudang.com/res/down/public/p_myhotel3d/web-mobile/lts2/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开个便利店 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我挪车贼6/螺丝请上车/科目三游戏手机版',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/noadgame/CoinCar/0225/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我挪车贼6/螺丝请上车/科目三游戏手机版 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '电脑版',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/noadgame/CoinCar/0225/indexPc.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '电脑版 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '就是要消除',
        'desc': '',
        'url': 'https://res.wqop2018.com/zhise/jsyxc2/GM/WW79B6NXSH56L47HF3CU/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '就是要消除 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '忙不过来',
        'desc': '',
        'url': 'https://debug.pumpkinheadgame.online/Seat2.0/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '忙不过来 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '快乐消水杯',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/yeguoqi/ZJCatCoffee4.10/1.20/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '快乐消水杯 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '解压高手（人物）',
        'desc': '',
        'url': 'https://antplay888.com/jyGS/v1.0.0/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '解压高手（人物） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '游戏高高手/解压高手（瓶子）',
        'desc': '',
        'url': 'https://antplay888.com/daBaoDaShi/t4/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '游戏高高手/解压高手（瓶子） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '老版本',
        'desc': '',
        'url': 'https://antplay888.com/jieYaGaoShou/game1/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '老版本 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超级蛇蛇',
        'desc': '',
        'url': 'https://cos.umgame.cn/minigame_preview/10832/webjump/web10757/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超级蛇蛇 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这个我在行',
        'desc': '',
        'url': 'https://yzcdn.yuanzililiang.cn/digitalAllStar/mobile/1.0.5/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这个我在行 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '欧皇奇兵/小老弟冲冲冲/小兵大出击',
        'desc': '',
        'url': 'http://cdn.cxgame.net/game/shifeng/roll/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '欧皇奇兵/小老弟冲冲冲/小兵大出击 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我要学打螺丝',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.net/wb_webview/playHammer/playHammer/_wyxdls/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我要学打螺丝 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我脑力很强',
        'desc': '',
        'url': 'https://www.nuanyou8.cn/naolichaoqiangMin/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我脑力很强 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '无敌冲关大师',
        'desc': '',
        'url': 'https://game2.sfplay.net/GearEvolution_Q/v1.0.0/v1',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '无敌冲关大师 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '弓箭手对决',
        'desc': '',
        'url': 'https://lfrjtxx-cou.gusspro.com/app-3/Test/Proj_GJDZ_H5/DRGM/1.01/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '弓箭手对决 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '弓箭手对决密码文档',
        'desc': '密码点击下方链接查看',
        'url': 'https://docs.qq.com/smartsheet/DU1JuaVdyRXBybkRw?nlc=1&tab=tGwetx&viewId=vq3gb2',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '弓箭手对决密码文档 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '神奇解压盒',
        'desc': '',
        'url': 'https://idata.igame58.com/h5/bljy/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '神奇解压盒 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '史莱姆黑洞吞吞吞/黑洞大成长',
        'desc': '',
        'url': 'http://h5.xiaoyouxi.co/superslimehole/h5/250219/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '史莱姆黑洞吞吞吞/黑洞大成长 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '引魂铃2破阵子',
        'desc': '',
        'url': 'https://xiaoyouxi.tyoufun.com/puzzle23/yhl2h5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '引魂铃2破阵子 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小母龙变形记',
        'desc': '',
        'url': 'https://www.game123.space/dragon/h5/__I70lZsC1o__8237383l_dee33edvd3g4gg441asdlldcrvrIIIdsed/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小母龙变形记 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小兵快发育',
        'desc': '',
        'url': 'https://ccos.gzqidong.cn/Survivor/desk/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小兵快发育 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '指尖狂飙',
        'desc': '',
        'url': 'https://abc.szyqhd.com/web/cslj/cgqwAnother/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '指尖狂飙 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '拔螺丝达人',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/jiangnengren/ScrewOut/NoAd/20240927/NoAd/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '拔螺丝达人 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这关难不倒',
        'desc': '',
        'url': 'https://cdn.szydtx.com/minigames/testGame/GameCollections/v2.6a/index.html?hide_nav_bar=0&disable_cdn=1&loader_name=default&disable_auto_expose=1&enable_webview_select_search=1&need_out_animation=right&font_scale=1.15',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这关难不倒 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '黄金城堡',
        'desc': '',
        'url': 'https://wuyouteam.work/public/web-idleShop/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '黄金城堡 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '惊奇事务所',
        'desc': '',
        'url': 'https://coooolgame.com/game/jqsws-gm/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '惊奇事务所 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我要过这关',
        'desc': '',
        'url': 'https://cdn-corp-backup.cygame666.cn/Wolf/client/web/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我要过这关 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小趴菜出击',
        'desc': '',
        'url': 'https://oss.ran-qu.com/operation/cinch/DR_GAME/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小趴菜出击 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '全民最强烧脑/全面最强烧脑',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/28029/web/1.0.1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '全民最强烧脑/全面最强烧脑 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '黑暗之未来战士游戏链接',
        'desc': '',
        'url': 'https://noad.zhuoyuexueba.com/weilaizhanshi/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '黑暗之未来战士游戏链接 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '不可思议的战争',
        'desc': '',
        'url': 'https://qcdn.bdoggame.com/cdn/release/hcrjhl/webVer/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '不可思议的战争 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '车车你在哪',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/28004/ccnzn_web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '车车你在哪 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '倒水冲冲冲',
        'desc': '',
        'url': 'https://www.alyminigame.com/game/daoshui/dsccc1210/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '倒水冲冲冲 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '下班我就走',
        'desc': '',
        'url': 'https://game.vsane.com/live/workoutgomanu/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '下班我就走 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '下班我就走桌子带编号链接',
        'desc': '',
        'url': 'https://game.vsane.com/live/workoutgomanu3/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '下班我就走桌子带编号链接 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超级车队',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/125_1744795661524/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超级车队 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '潜水员日记',
        'desc': '',
        'url': 'https://wsdw.dengdengkeji.com/qianhaibuyu/web0.0.2/sdk/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '潜水员日记 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '顺手摆好',
        'desc': '',
        'url': 'https://h5.cjs001.com/game/CoffeePack/20241225_ssbh/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '顺手摆好 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '冲了个冲啊',
        'desc': '',
        'url': 'https://yygame.mmopk.net/H5AnimalEliminationNew/202411261110/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '冲了个冲啊 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '飞越战役游戏手机版',
        'desc': '',
        'url': 'https://file.gugudang.com/res/down/public/p_beibao2/web-mobile/lts/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '飞越战役游戏手机版 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '飞越战役H5合集',
        'desc': '',
        'url': 'https://file.gugudang.com/res/down/public/p_beibao2/web-mobile/lts/web_all.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '飞越战役H5合集 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '永不言弃的大师',
        'desc': '',
        'url': 'https://si.ali.landintheair.com/gamepass.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '永不言弃的大师 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '手机端',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/tanzhihuan/WebGL/WoZuiAiNuoChe/1227/2/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '手机端 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '电脑端',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/tanzhihuan/WebGL/WoZuiAiNuoChe/1227/2/indexPC.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '电脑端 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '撸铁铁',
        'desc': '',
        'url': 'https://res.kampfiregames.cn/brickGame/web6/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '撸铁铁 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开了眼了',
        'desc': '',
        'url': 'https://hm-ydgw.chuanglinggame.com/web/klyl/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开了眼了 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '古宅心慌慌',
        'desc': '',
        'url': 'https://gzxhh.redraingame.com/hckz/H5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '古宅心慌慌 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '右手画彩虹',
        'desc': '',
        'url': 'https://file-pgame.kidikidi.net/plane/PlaneBuild/Web/V20250403_1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '右手画彩虹 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '背包英雄',
        'desc': '',
        'url': 'https://beibaoyx.qi-guo.cn/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '背包英雄 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '出击吧战车',
        'desc': '',
        'url': 'https://game2.sfplay.net/WildChariot/v1.0.3/v2/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '出击吧战车 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '阴阳锅3姻缘牵说明文档',
        'desc': '',
        'url': 'https://e3buvohnri.feishu.cn/docx/P7FOdtqXjoa0Cxx4jJtcdcAznjh',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '阴阳锅3姻缘牵说明文档 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '阴阳锅2 同心结',
        'desc': '',
        'url': 'https://xiaoyouxi.tyoufun.com/puzzle20/dyzbyinyangguo2/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '阴阳锅2 同心结 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '阴阳锅',
        'desc': '',
        'url': 'https://youxipic.88090.com/yinyangguo3/zb/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '阴阳锅 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '电脑端',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/noadgame/PigRun/1220/indexPc.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '电脑端 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '手机端',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/noadgame/PigRun/1220/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '手机端 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '苦命打工人/躺平鱼王/乱斗总动员',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/sandbox3/tangpingmy/zbly/web-mobile/index.html?t=1666688485408',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '苦命打工人/躺平鱼王/乱斗总动员 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '拼的过我吗',
        'desc': '',
        'url': 'https://idata.igame58.com/h5/ttlqxs_noname/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '拼的过我吗 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '毛线排序',
        'desc': '',
        'url': 'https://env-00jx4jyg9fu6-static.normal.cloudstatic.cn/games/maoxianpaixu/index.html?hide_nav_bar=0&disable_cdn=1&loader_name=default&_refluxos=a10',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '毛线排序 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '服了没有',
        'desc': '',
        'url': 'https://juezhongjue-1320710492.cos.ap-nanjing.myqcloud.com/ChiLunEYa/webgame_0427A/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '服了没有 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这关没人过',
        'desc': '',
        'url': 'https://res.game.7to.cn/gameres/pgame2/jigsaw/game/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这关没人过 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '哥们来整活',
        'desc': '',
        'url': 'https://game.sfplay.net/ps/GearGame_NoAds/v10/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '哥们来整活 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '玩的有点溜',
        'desc': '',
        'url': 'https://h5.xiaoyouxi.co/crazyplanelanding/Web_H5/2504251411/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '玩的有点溜 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '一起滑梯冲浪',
        'desc': '',
        'url': 'https://aliyun.umgame.cn/minigame_preview/10865/DY_web/web1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '一起滑梯冲浪 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '迷你守护者',
        'desc': '',
        'url': 'http://littlegame.tomato123.cn/miniTD/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '迷你守护者 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '绝境逢生（修改器点主页关卡名字弹出）',
        'desc': '',
        'url': 'https://oppomini.eqmobi.com/wt74/JJFS/web/web-mobile1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '绝境逢生（修改器点主页关卡名字弹出） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '吃果果',
        'desc': '',
        'url': 'https://game.vsane.com/live/eatfruitmanu/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '吃果果 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '过关高手',
        'desc': '',
        'url': 'https://beibao.qi-guo.cn/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '过关高手 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑力我超棒',
        'desc': '',
        'url': 'https://cdn.tagame.cn/05nlwcb/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑力我超棒 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '双人对决/1234双人对决',
        'desc': '',
        'url': 'http://source.youletd.com/file/h5/srjymnq3/v100/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '双人对决/1234双人对决 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消消不能停',
        'desc': '',
        'url': 'https://show-1259304626.cos.ap-guangzhou.myqcloud.com/3d%E9%AD%94%E6%96%B9/dy/wb/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消消不能停 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '人偶师',
        'desc': '',
        'url': 'https://xiaoyouxi.tyoufun.com/puzzle27/roszb/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '人偶师 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '迷你大闯关',
        'desc': '',
        'url': 'https://cdn-xyx-fire.raink.com.cn/9046/ljtf/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '迷你大闯关 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '诗词大擂台',
        'desc': '',
        'url': 'https://cpzycdn.dianwanshidai.com/shicidaleitai/20250421/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '诗词大擂台 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '命运之王',
        'desc': '',
        'url': 'https://res5.eqmobi.com/monopoly/myzw_20250421_1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '命运之王 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开心魔法师',
        'desc': '',
        'url': 'https://2025.niudu.com/HappyMagic/tt/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开心魔法师 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '幸存者庇护所',
        'desc': '',
        'url': 'https://szj.txhy1699.com/chilun/wg/wg250421A/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '幸存者庇护所 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我玩个锤子啊',
        'desc': '',
        'url': 'http://h5.xiaoyouxi.co/hammersquad/h5_02050319/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我玩个锤子啊 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '涂色大师',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/drawmaster_c/zb/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '涂色大师 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '方块猫（方块）',
        'desc': '',
        'url': 'https://file.gugudang.com/res/down/public/p_brick99/web-mobile/lts2/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '方块猫（方块） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '方块猫（装修）',
        'desc': '',
        'url': 'https://file.gugudang.com/res/down/public/p_fkm/web-mobile/lts2/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '方块猫（装修） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小兵快点冲',
        'desc': '',
        'url': 'https://dragonrlike.cddc.work/game/plandb/web-mobile/index.html?a=4565154',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小兵快点冲 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '模拟齿轮战争',
        'desc': '',
        'url': 'https://cooperation.pailedi.com/web2/chenyh/humanEvolution/game/v1.0.1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '模拟齿轮战争 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '闯难关',
        'desc': '',
        'url': 'http://h5.xiaoyouxi.co/hammersquad/h5_02050319/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '闯难关 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我最爱消除',
        'desc': '',
        'url': 'https://idata.igame58.com/h5/hdddx/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我最爱消除 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '萌牛贪吃蛇',
        'desc': '',
        'url': 'http://mengniutanchishe.duini.com/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '萌牛贪吃蛇 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '连连消对战版',
        'desc': '',
        'url': 'http://game.ichunhao.cn/qlz/llkdzb/?tester=1',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '连连消对战版 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '就玩亿关',
        'desc': '',
        'url': 'https://xcx.youletd.com/test/web/dbbzdxczbzzs/v110/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '就玩亿关 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超能打桩',
        'desc': '',
        'url': 'https://qtweb.qtjoy.com/test/DismantletTower/V2/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超能打桩 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '纸人点睛',
        'desc': '',
        'url': 'https://xiaoyouxi.tyoufun.com/puzzle29/zrdjzb/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '纸人点睛 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '天门无限开',
        'desc': '',
        'url': 'https://cdn.hiluluke.com/noad/noad/game.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '天门无限开 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超级翻翻翻',
        'desc': '',
        'url': 'https://lionstudios.ali.landintheair.com/HexaSort/noads/0.1.8/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超级翻翻翻 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我要过这关/每天过一关',
        'desc': '',
        'url': 'https://cdn-corp-backup.cygame666.cn/Wolf/client/web/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我要过这关/每天过一关 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我爱上消除',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/colorgraffiti/h5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我爱上消除 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '速度没我快',
        'desc': '',
        'url': 'https://h5.cjs001.com/game/qiMiaoDeWenZi/tt_20240404_sd/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '速度没我快 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '你真了不起',
        'desc': '',
        'url': 'https://jzxcdn.jzxgame.com/jzxhy_wzyx/_jzx/nzlbq/web/20250408/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '你真了不起 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '箭箭惊心',
        'desc': '',
        'url': 'https://play.refight.cn/ShootArrowThrills/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '箭箭惊心 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消不完呀/羊小羊闯关',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/noadgame/PigRun/0427/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消不完呀/羊小羊闯关 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消了个消啊/消了个消啦/消不到我吧',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/noadgame/MoveNiu/41401/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消了个消啊/消了个消啦/消不到我吧 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消的过我吗',
        'desc': '',
        'url': 'https://idata.igame58.com/h5/hdddx/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消的过我吗 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我智商爆表',
        'desc': '',
        'url': 'https://res.wqop2018.com/cp/tt_wzwz/puke/wozhishangbaobiao1.0.15/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我智商爆表 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '烧脑杂货铺',
        'desc': '',
        'url': 'https://cdn.xmhemeng.com/shaonaozahuopu/webnoads/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '烧脑杂货铺 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '（验证码：21345687）或（83376）',
        'desc': '',
        'url': 'https://daren.glifegame.com/piggy2_test/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '（验证码：21345687）或（83376） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消消消花园',
        'desc': '',
        'url': 'https://herofight.cn/preview/web/FlowerCrushMobile',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消消消花园 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '哇塞的收纳',
        'desc': '',
        'url': 'https://jojo-d.space/wssn/desk/web-mobile/index.html?hide_nav_bar=0&disable_auto_expose=1&enable_webview_select_search=1&need_out_animation=right&font_scale=1.15',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '哇塞的收纳 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '螺丝钉厂妹多',
        'desc': '',
        'url': 'https://abc.szyqhd.com/web/cslj/zlyj/web-mobile/index.html?hide_nav_bar=0&disable_cdn=1&loader_name=default&disable_auto_expose=1&enable_webview_select_search=1&need_out_animation=right&font_scale=1.15',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '螺丝钉厂妹多 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '大铁锤敲敲敲',
        'desc': '',
        'url': 'https://qtweb.qtjoy.com/test/DismantletTower/V2/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '大铁锤敲敲敲 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '画符能手',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/213_1744886704542/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '画符能手 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '轮到你闯关/拦不住我呀',
        'desc': '',
        'url': 'https://idata.igame58.com/h5/hbdc_noname/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '轮到你闯关/拦不住我呀 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '捞钱暴富/帮她闯关',
        'desc': '',
        'url': 'https://idata.igame58.com/h5/psdc_home/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '捞钱暴富/帮她闯关 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '节奏盒子硬控版',
        'desc': '',
        'url': 'https://2025.niudu.com/xiaojing/rhythmBox-ykb/tt-0403/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '节奏盒子硬控版 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '方块叠叠乐',
        'desc': '',
        'url': 'https://hyd.banshengkeji.com/BlockWater/?_refluxos=a10',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '方块叠叠乐 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '逃离拥堵',
        'desc': '',
        'url': 'https://cos.umgame.cn/minigame_preview/10587/webjump25011715/webjump25011715/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '逃离拥堵 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '猛男生活日记',
        'desc': '',
        'url': 'https://xqdzz-cdn.xyx.mmhygame.com/xqdzz/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '猛男生活日记 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '你真的很牛',
        'desc': '',
        'url': 'https://cdn.zgddgame.com/Web/SnipeET/NZDHN/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '你真的很牛 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '怪谈求生记',
        'desc': '',
        'url': 'https://aotianyou.xiaojing.work/gtqsj/h5/web-mobile/index_2.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '怪谈求生记 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '放置火柴人',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/28031/web/1.0.1/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '放置火柴人 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '飞刀高高手',
        'desc': '',
        'url': 'https://game.xplaymobile.com/qiuyanGame/web/qiege/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '飞刀高高手 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '噩梦宿舍',
        'desc': '',
        'url': 'https://file.gugudang.com/res/down/public/p_beibaotd2/web-mobile/lts_aabb/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '噩梦宿舍 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '冲刷大师',
        'desc': '',
        'url': 'https://2025.niudu.com/rushMaster/Web/1.0.2/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '冲刷大师 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超级水果王',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/zhuangchenyang/ColorBlockJam/tt11b2670f8e846f1f07/1.1.15/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超级水果王 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '比比谁更牛',
        'desc': '',
        'url': 'https://h5.xiaoyouxi.co/stunttruckjumping2/h5_web/04282010/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '比比谁更牛 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '鸳鸯锅',
        'desc': '',
        'url': 'https://xiaoyouxi.tyoufun.com/puzzle20/yygdyzb/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '鸳鸯锅 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '下楼吃火锅',
        'desc': '',
        'url': 'https://hscdn9.quanmin-game.com/huoguodian/bai_xlchg/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '下楼吃火锅 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消了个寂寞',
        'desc': '',
        'url': 'https://mini.ssflashgo.com/stonesh/LY/huaRongDao/web/202504291559/web-mobile/index.html?gameType=base',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消了个寂寞 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '信不信我消你',
        'desc': '',
        'url': 'https://res.kampfiregames.cn/2/917c66a9fbc8049A7c9a7ca8b3806222/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '信不信我消你 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我是消除达人',
        'desc': '',
        'url': 'https://commoncdn.qingmanet.com/waixingren/web/1.0.0/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我是消除达人 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '无敌生存队',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/wanglifeng/NoAdGame/gearFight/v04300922/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '无敌生存队 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '蛇王之战',
        'desc': '',
        'url': 'https://publishing.u3d.cn/game/swzz',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '蛇王之战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '深渊看守者/幸存者群岛/幸存者岛屿（修改器点左上角灰色框框弹出）',
        'desc': '',
        'url': 'https://publishing.u3d.cn/game/syksz',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '深渊看守者/幸存者群岛/幸存者岛屿（修改器点左上角灰色框框弹出） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超时代进化/我独自进化',
        'desc': '',
        'url': 'https://tos.qwpo2018.com/mp/game/web/gm/9fad718c7879ae8c6eca07ba77f8578d/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超时代进化/我独自进化 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '末世生存战/能源大战/冬日求生版本一',
        'desc': '',
        'url': 'https://saygames.ali.landintheair.com/GoldRush/NoAds/0.0.1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '末世生存战/能源大战/冬日求生版本一 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '末世生存战/能源大战/冬日求生版本二',
        'desc': '',
        'url': 'https://saygames.ali.landintheair.com/GoldRush/NoAds/0.0.3/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '末世生存战/能源大战/冬日求生版本二 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '趣味水杯大师',
        'desc': '',
        'url': 'https://cdn.zgddgame.com/Web/PourAwayTheWater/QWcupDy/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '趣味水杯大师 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '宠物连连看之星星消灭',
        'desc': '',
        'url': 'https://idata.igame58.com/kyxsmallres/cwxxpd/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '宠物连连看之星星消灭 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '山海异兽进化/传闻中的高手',
        'desc': '',
        'url': 'https://joyjoyanimal.top/TheRumoredMaster/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '山海异兽进化/传闻中的高手 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小火车挖矿/王牌木材商',
        'desc': '',
        'url': 'http://h5.xiaoyouxi.co/trainminer/h50918/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小火车挖矿/王牌木材商 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '可真有一套',
        'desc': '',
        'url': 'https://game2.sfplay.net/BlindBank/v1.0.0/v1/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '可真有一套 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '内购圣域1：无限充值（激活码2024+6666+7777+8888）',
        'desc': '',
        'url': 'http://59.56.110.131:88/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '内购圣域1：无限充值（激活码2024+6666+7777+8888） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '横屏传奇',
        'desc': '',
        'url': 'https://client.cmzd.shengjuewl.com/1/youxitest.php',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '横屏传奇 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '螺旋挖掘机帝国',
        'desc': '',
        'url': 'https://sdk.hwengame.com/IssuerPackNew/IdleSpiral_1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '螺旋挖掘机帝国 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '打败小霸王',
        'desc': '',
        'url': 'https://cooperation.pailedi.com/web2/wanglei/DBXBW2/Web/v.2.1.0/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '打败小霸王 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '豆腐公主',
        'desc': '',
        'url': 'https://hncygame.hainanyhkj.com/WebGame/DFDouyin/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '豆腐公主 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '像素太空杀',
        'desc': '',
        'url': 'http://xcx.youletd.com/file/h5/xstks/v100/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '像素太空杀 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '无厘头大挑战',
        'desc': '',
        'url': 'https://static.puzzles100.com/releases/game_1/g1-1003-508-1/webN_v4/web-mobile-DT_250422_120112_795/index250422_120112_795.5.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '无厘头大挑战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '双人解压竞技',
        'desc': '',
        'url': 'http://source.youletd.com/file/h5/srjymnq/v104/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '双人解压竞技 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开局爆装备/炼剑我最强',
        'desc': '',
        'url': 'https://game2.sfplay.net/MachoSword/v1.0.1/v1/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开局爆装备/炼剑我最强 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '冲关小小队/超进化大招版',
        'desc': '',
        'url': 'https://game2.sfplay.net/BagFighter/1.0.0/v1/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '冲关小小队/超进化大招版 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '梦幻八爪鱼',
        'desc': '',
        'url': 'https://mhbzy.zhuanyidiandian.com/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '梦幻八爪鱼 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '解压100关/合一合专家',
        'desc': '',
        'url': 'https://cdn-star.soulgame.net.cn/h5/JengaYes/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '解压100关/合一合专家 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '乱斗大比拼/旋转刀刀刀版本一',
        'desc': '',
        'url': 'https://cdn.game.chot.cn/resource/chot/lddbp_zs/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '乱斗大比拼/旋转刀刀刀版本一 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '乱斗大比拼/旋转刀刀刀版本二',
        'desc': '',
        'url': 'https://cdn.game.chot.cn/resource/chot/lddbp_zs/0214/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '乱斗大比拼/旋转刀刀刀版本二 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '巨人向前冲',
        'desc': '',
        'url': 'https://ysxxtech.com/nodeserver/yingdi/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '巨人向前冲 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '火柴人功夫大师',
        'desc': '',
        'url': 'https://www.starseasoft.com/gongfudashi/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '火柴人功夫大师 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '采油小生/火爆加油站/别挡我的道',
        'desc': '',
        'url': 'https://homa.ali.landintheair.com/GasStation/NoAds/0.0.4/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '采油小生/火爆加油站/别挡我的道 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我找字特牛',
        'desc': '',
        'url': 'http://101.34.244.181:19198/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我找字特牛 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '点开设置有gm版本二',
        'desc': '',
        'url': 'https://game2.sfplay.net/Bankruptcy/v1.2.0/v3/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '点开设置有gm版本二 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '连线超简单',
        'desc': '',
        'url': 'https://yogo.yogohoho.com/ksdemo/lianxianchaojiandan1516/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '连线超简单 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '天天羽毛球/全民羽毛球',
        'desc': '',
        'url': 'https://res.wqop2018.com/mp/game/web/gm/a17aa8a788c3cd38ef693fd30e863b35/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '天天羽毛球/全民羽毛球 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '黑暗神话',
        'desc': '',
        'url': 'https://gzlangyou.cn/rougeIndex/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '黑暗神话 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '实力打脸',
        'desc': '',
        'url': 'https://cdn.tagame.cn/07sldl/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '实力打脸 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '玩的有点马',
        'desc': '',
        'url': 'http://h5.xiaoyouxi.co/walkking/h5250506/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '玩的有点马 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '滚雪球达人',
        'desc': '',
        'url': 'https://qtweb.qtjoy.com/externalWeb/TKB/SnowRace_SkySkin/V0/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '滚雪球达人 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '妈妈把我辣条藏起来了',
        'desc': '',
        'url': 'https://xiaoyouxi.tyoufun.com/latiao/ltzb/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '妈妈把我辣条藏起来了 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消除我最行',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.net/wb_webview/eliminatemybest/h5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消除我最行 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小小兵守卫战',
        'desc': '',
        'url': 'https://game-cdn.njymkj.fun/web-new/Endless_Web/8.0.3/bb0615b8/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小小兵守卫战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '工具人一败涂地',
        'desc': '',
        'url': 'https://cdn.zgddgame.com/Web/SnipeET/GJRYBTD/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '工具人一败涂地 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '摸鱼之神',
        'desc': '',
        'url': 'https://2025.niudu.com/xiaojing/rhythmBox-wszhtc/tt-0427/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '摸鱼之神 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超难100关',
        'desc': '',
        'url': 'https://game.sfplay.net/ps/Web/BounceGame0429A/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超难100关 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '梦之便利店',
        'desc': '',
        'url': 'http://daren.dabayuyu.com/bld/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '梦之便利店 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小人和小船',
        'desc': '',
        'url': 'https://cdn.cdlionhead.com/minigame/Scale_the_Depths/noads/1.1/scale1.1/Index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小人和小船 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '整理货柜/货柜趣整理',
        'desc': '',
        'url': 'https://idata.igame58.com/h5/zlhg_noname/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '整理货柜/货柜趣整理 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '喵喵爱吃瓜',
        'desc': '',
        'url': 'http://112.74.33.201:8080/tcs2/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '喵喵爱吃瓜 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '爆破解压',
        'desc': '',
        'url': 'https://idata.igame58.com/h5/bttx_tt/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '爆破解压 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '山村老屋',
        'desc': '',
        'url': 'http://114.215.121.243:8088/sclw/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '山村老屋 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '逃出绝命城说明文档',
        'desc': '',
        'url': 'https://e3buvohnri.feishu.cn/docx/QseadmjAcou6y7xDdYpcSUrfnOe',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '逃出绝命城说明文档 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '复制链接到浏览器打开，先看里面教程再打开游戏，OK',
        'desc': '',
        'url': 'https://voodoo.ali.landintheair.com/RageSwarm/NoAds/0.0.11/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '复制链接到浏览器打开，先看里面教程再打开游戏，OK 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '关关都难过',
        'desc': '',
        'url': 'https://webmobile.zplay.com/ggdng/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '关关都难过 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '难过关关过',
        'desc': '',
        'url': 'https://cdn.tagame.cn/06ngggg/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '难过关关过 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '包能通关的',
        'desc': '',
        'url': 'https://www.qihuanmao.cn/BNTG/ZBAds/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '包能通关的 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这关很难过',
        'desc': '',
        'url': 'https://res.kampfiregames.cn/2/c2316905f24ac6fa0b62dbee484c001d/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这关很难过 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '求生者日常',
        'desc': '',
        'url': 'https://oss.ran-qu.com/ext/long_voyage/qszrc1.0.3/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '求生者日常 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '海战棋寻机头',
        'desc': '',
        'url': 'https://zhafeiji.xxddjj.top:666/dy_link/hzq/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '海战棋寻机头 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '收纳小筑',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/28030/web/1.0.4/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '收纳小筑 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '梦想消除（汽车）',
        'desc': '',
        'url': 'http://h5.sm.deniulor.com/busjam/h5_mxxc/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '梦想消除（汽车） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '梦想消除/合成小球',
        'desc': '',
        'url': 'https://h5.xiaoyouxi.co/mergeDrop2/2503141812/H5-250424/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '梦想消除/合成小球 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '点点猜歌名',
        'desc': '',
        'url': 'https://zhafeiji.xxddjj.top:666/dy_link/cgming/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '点点猜歌名 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '长了个脑子',
        'desc': '',
        'url': 'http://szj.txhy1699.com/zlgnz/250512/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '长了个脑子 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '无敌闯关王',
        'desc': '',
        'url': 'https://game.sfplay.net/ps/TD_WX_ZSGFZ/WebGL4/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '无敌闯关王 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消除了么',
        'desc': '',
        'url': 'https://qiuqiuxiaochu.xiaojing.work/webgl/20250507/webgl/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消除了么 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '压力消除站',
        'desc': '',
        'url': 'https://aaa.puffergames.com/GameServerData2/Unity/MCNP/Build',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '压力消除站 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '炸裂脑回路',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.net/wb_webview/capybaraLink/h5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '炸裂脑回路 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '时光修理铺',
        'desc': '',
        'url': 'https://update-smallgame.huanyz.com/X9/CDN/WebGL/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '时光修理铺 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我大意了没有闪',
        'desc': '',
        'url': 'https://api.moeu.cc/zdBNMm6La/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我大意了没有闪 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '火柴人战争荣耀',
        'desc': '',
        'url': 'https://cos.umgame.cn/minigame_remote/minigame/client/snipingaliensremote/remote/h5/tt_web_default/index_stickwar.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '火柴人战争荣耀 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消消解压王/缤纷消除馆',
        'desc': '',
        'url': 'https://bzres.yigomob.com/noad/ppl_bfxcg/ppl_noads_v20/v20/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消消解压王/缤纷消除馆 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '大聪明显眼包',
        'desc': '',
        'url': 'https://jzxcdn.jzxgame.com/jzxhy_wzyx/dcmxyb/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '大聪明显眼包 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '皇家守卫军/荒岛探险家/星球探险家',
        'desc': '',
        'url': 'https://si.ali.landintheair.com/gamepass.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '皇家守卫军/荒岛探险家/星球探险家 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开局就疯狂',
        'desc': '',
        'url': 'https://kjjfk.xianjianwendao.com/web/2.0.3/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开局就疯狂 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小鱼人战争',
        'desc': '',
        'url': 'http://xyrzz.shisuiwang.top/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小鱼人战争 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我还没上车啊',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/klotskicar/h5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我还没上车啊 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '猪猪特攻队',
        'desc': '',
        'url': 'https://oss.ran-qu.com/ext/pig_defence/v1.0.0/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '猪猪特攻队 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消灭病毒',
        'desc': '',
        'url': 'https://cdn-bingdu.lanfeitech.com/ADH5/v6/h5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消灭病毒 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '逃生小英雄',
        'desc': '',
        'url': 'https://game2.sfplay.net/DragonEscape/v1.0.0/v6',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '逃生小英雄 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '尸兄别这样',
        'desc': '',
        'url': 'http://175.178.217.30:8080/taoist/v1/?uid=test01',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '尸兄别这样 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '花朵拼拼',
        'desc': '',
        'url': 'https://idata.igame58.com/h5/hdpp_noname/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '花朵拼拼 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '找不合理8000关',
        'desc': '',
        'url': 'https://static.puzzles100.com/releases/game_1/g1-1003-508-1/webN_v4/web-mobile-DT_250514_193219_191/index250514_193219_191.7.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '找不合理8000关 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '节奏猫咪',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.net/wb_webview/record-assets-h5/bongocath5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '节奏猫咪 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '奇葩英雄大战',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/28018/web/1.0.0/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '奇葩英雄大战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '十级烧脑',
        'desc': '',
        'url': 'http://game.migoup.com/h5/sjsn',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '十级烧脑 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我是小小精英/变异怪兽之王',
        'desc': '',
        'url': 'https://www.dalianchangwan.top:18081/games/wsxxjy/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我是小小精英/变异怪兽之王 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '合金战争',
        'desc': '',
        'url': 'https://game.xplaymobile.com/qiuyanGame/web/tank/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '合金战争 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '做个老板',
        'desc': '',
        'url': 'https://cos.umgame.cn/minigame_preview/10895/h5-0.1.9/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '做个老板 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '乐玩大挑战',
        'desc': '',
        'url': 'https://idata.igame58.com/h5/wdcwd_home_tt/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '乐玩大挑战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '最牛大师/过不去的关',
        'desc': '',
        'url': 'https://demo2.9999le.com/trapmastert16/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '最牛大师/过不去的关 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '游戏大师/数独彩虹桥',
        'desc': '',
        'url': 'https://cdn.zbyx.top/shudu/shudu-h5-newUI/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '游戏大师/数独彩虹桥 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '鲨鱼风暴',
        'desc': '',
        'url': 'https://iaacdn.mmlinux.com/CLJS/web/web-mobile1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '鲨鱼风暴 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '五杀魔导团',
        'desc': '',
        'url': 'https://njhalo.tpddns.cn:7456/tzsn1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '五杀魔导团 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '吃碰消消大师/就我眼力好',
        'desc': '',
        'url': 'https://pengpengma.cdn.darknight.games/pcgxx/web/v0.4.4/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '吃碰消消大师/就我眼力好 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '粉碎大师',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/279_1746600825986/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '粉碎大师 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '植物进化杂交版/丧尸大战植物',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/284_1746757273913/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '植物进化杂交版/丧尸大战植物 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '画线摩托车',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.net/wb_webview/drawlinemotorcycle/h5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '画线摩托车 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '战争起源（点五次设置触发GM）',
        'desc': '',
        'url': 'https://cooperation.pailedi.com/web2/dingbowen/wxcs/daren/v2/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '战争起源（点五次设置触发GM） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '逃离打工人',
        'desc': '',
        'url': 'https://hncygame.hainanyhkj.com/WebGame/TPJZ/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '逃离打工人 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '卡皮巴拉冲冲冲',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/capybarago/h5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '卡皮巴拉冲冲冲 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '天才思维',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.net/wb_webview/snd2/htcsw/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '天才思维 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '包好玩的啊/游戏我最强',
        'desc': '',
        'url': 'https://cos.umgame.cn/minigame_preview/10875/webjump/webjumpnet/web10875g/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '包好玩的啊/游戏我最强 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '道道道人间道',
        'desc': '',
        'url': 'https://xiaoyouxi.tyoufun.com/puzzle26/dddrjd/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '道道道人间道 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '你行不行啊',
        'desc': '',
        'url': 'https://cdn.hulumao.top/nx/index.html?test',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '你行不行啊 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '坦克别嚣张',
        'desc': '',
        'url': 'https://game2.sfplay.net/TankGo/v1.0.0/v7/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '坦克别嚣张 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '变装女王秀',
        'desc': '',
        'url': 'https://gameres.nfsq.games/njrhyw/test/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '变装女王秀 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '时光记忆',
        'desc': '',
        'url': 'https://cdn.xmhemeng.com/shiguangjiyi/webnoads/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '时光记忆 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '遗忘大陆吞噬进化',
        'desc': '',
        'url': 'https://www.zywxgames.com/Resource/panguangwei/Web/YiWangDaLu/web_2/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '遗忘大陆吞噬进化 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '鼻涕虫历险记游戏文档说明文档',
        'desc': '',
        'url': 'https://w5faz00ggc.feishu.cn/docx/FkvHdrap8ojNYFxNuAtc96Uyn8g',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '鼻涕虫历险记游戏文档说明文档 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '熊猫来修真',
        'desc': '',
        'url': 'https://cdn.zgddgame.com/Web/XMLXZ/0.2.0/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '熊猫来修真 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '大鹅快点跑',
        'desc': '',
        'url': 'https://api.dlzykjgs.cn/mobile/?hide_nav_bar=0&disable_cdn=1&loader_name=default&hide_nav_bar=0&disable_cdn=1&loader_name=default',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '大鹅快点跑 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '地牢之下游戏文档说明文档',
        'desc': '',
        'url': 'https://w5faz00ggc.feishu.cn/docx/W52Td2QmuobvaXxmFEUc5C3KnHb',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '地牢之下游戏文档说明文档 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '先消除再说',
        'desc': '',
        'url': 'https://xxc.qbwu.com/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '先消除再说 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '迷局脱困',
        'desc': '',
        'url': 'https://www.yanxingwl.cn/mjtk/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '迷局脱困 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '烧脑拼图达人',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.net/wb_webview/myDog/brainJigsaw/daren/web-mobile/index.html?fdfdfdf',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '烧脑拼图达人 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '一局夺魁',
        'desc': '',
        'url': 'https://game.vsane.com/live/oncewinmanu',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '一局夺魁 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '进来别跑',
        'desc': '',
        'url': 'https://cdn.liongo.top/apo/apo/v1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '进来别跑 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这关不简单',
        'desc': '',
        'url': 'https://ysxxtech.com/nodeserver/yingdi/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这关不简单 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '全民脑力训练（卡皮巴拉）',
        'desc': '',
        'url': 'https://daluosi.xiaojing.work/QMNLXN/v1/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '全民脑力训练（卡皮巴拉） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '全民脑力训练（卡皮巴拉）',
        'desc': '',
        'url': 'https://daluosi.xiaojing.work/dy_nuozhu/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '全民脑力训练（卡皮巴拉） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '一起堆方块',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/18003/web_yqtfk/1.0.1/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '一起堆方块 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '背后灵',
        'desc': '',
        'url': 'https://xiaoyouxi.tyoufun.com/puzzle29/dyzb/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '背后灵 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '疯狂秀秀秀',
        'desc': '',
        'url': 'https://szj.txhy1699.com/fkxxx/tt/ver1.0.2/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '疯狂秀秀秀 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '冲一冲专家',
        'desc': '',
        'url': 'https://debug.pumpkinheadgame.online/GearCar_Test/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '冲一冲专家 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '画辆碰碰车游戏文档说明文档',
        'desc': '',
        'url': 'https://w5faz00ggc.feishu.cn/docx/PdhAda77foUb9RxFX8ocGPlense',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '画辆碰碰车游戏文档说明文档 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '高手打螺丝',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/zhuangchenyang/ScrewMatch/tt596a2fd7c65d6dba07/1.0.1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '高手打螺丝 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '街头跑酷',
        'desc': '',
        'url': 'https://assets.tinyfun.online/game/preview/street-chaser/sale/100/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '街头跑酷 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '老版本',
        'desc': '',
        'url': 'http://szj.txhy1699.com/xfyq/250513_1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '老版本 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '老版本',
        'desc': '',
        'url': 'http://szj.txhy1699.com/xfyq/250520/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '老版本 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '节奏沙盒',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.net/wb_webview/saveGirlDragonPlus/jzsh/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '节奏沙盒 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消除百分百游戏文档说明文档',
        'desc': '',
        'url': 'https://w5faz00ggc.feishu.cn/docx/XLAUdSetQoxhPRx6aEocWPiBntg',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消除百分百游戏文档说明文档 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '飞剑扫八荒',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/141v2_1747906177423/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '飞剑扫八荒 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '原来酱紫啊',
        'desc': '',
        'url': 'https://yljz.qbwu.com/yuanlaiasdfsdf/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '原来酱紫啊 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '放置火柴人',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/28031/web/1.0.1/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '放置火柴人 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '迷你游戏人',
        'desc': '',
        'url': 'https://aliyun.umgame.cn/minigame_preview/10013/web/webgl2/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '迷你游戏人 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '作战总动员/无敌机甲飞行',
        'desc': '',
        'url': 'https://cdn.yh.aiyou89.top/airplane/h5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '作战总动员/无敌机甲飞行 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '过河大师版本一',
        'desc': '',
        'url': 'https://renyousome.renyouwangluo.cn/remoteGame/web_ghds_20250524/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '过河大师版本一 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '过河大师版本二',
        'desc': '',
        'url': 'https://renyousome.renyouwangluo.cn/remoteGame/ghds_1.0.24_test127/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '过河大师版本二 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '爆笑纸盒人/逃离纸盒镇',
        'desc': '',
        'url': 'https://res.sjzgxwl.com/pingce/zhiheren_hall/web_9/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '爆笑纸盒人/逃离纸盒镇 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '挤挤挤公交',
        'desc': '',
        'url': 'https://si.ali.landintheair.com/gamepass.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '挤挤挤公交 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '打螺丝大亨',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/noadgame/screwJam/20250526DLSDH/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '打螺丝大亨 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消消数独',
        'desc': '',
        'url': 'https://cdn.zbyx.top/shudu/chengmei-h5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消消数独 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消不完了',
        'desc': '',
        'url': 'https://www.rewanyouxi.com/games/xbwl/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消不完了 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '武器锻造王者',
        'desc': '',
        'url': 'https://qtweb.qtjoy.com/games/WeaponWeb/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '武器锻造王者 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '全民找一找',
        'desc': '',
        'url': 'https://h5.souget.com/game/zyz/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '全民找一找 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '音游谁玩的溜',
        'desc': '',
        'url': 'https://game.huanjinggame.com/beatAur_TT/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '音游谁玩的溜 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '命运挑战/百亿继承人版本一',
        'desc': '',
        'url': 'https://res.wqop2018.com/partner/cdbhy/mytz/Childbirth/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '命运挑战/百亿继承人版本一 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '命运挑战/百亿继承人版本二',
        'desc': '',
        'url': 'https://res.wqop2018.com/partner/cdbhy/xjrs/Childbirth/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '命运挑战/百亿继承人版本二 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '拥挤团战',
        'desc': '',
        'url': 'https://si.ali.landintheair.com/gamepass.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '拥挤团战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '嘎嘎解压',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.net/wb_webview/saveGirlDragon/saveGirlDragon/cbdw_tt_h5/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '嘎嘎解压 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小丑竟是我自己（小孩）',
        'desc': '',
        'url': 'http://www.dalianchangwan.top:18081/games/xcjswzj',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小丑竟是我自己（小孩） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '动物超级战队',
        'desc': '',
        'url': 'https://animalteam.xiaojing.work/a2502/html/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '动物超级战队 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '全力解压（飞机）',
        'desc': '',
        'url': 'https://h5.xiaoyouxi.co/plane/h5/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '全力解压（飞机） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '全力解压（汽车）',
        'desc': '',
        'url': 'https://h5.xiaoyouxi.co/crazyplanelanding_feilun/web_h5/2503181830/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '全力解压（汽车） 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '菜鸡大作战',
        'desc': '',
        'url': 'http://106.52.242.35/bqg/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '菜鸡大作战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '逃跑吧兄弟',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/138_1746693762375/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '逃跑吧兄弟 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '真让我头大',
        'desc': '',
        'url': 'https://res.ddwgame.com/prod/wgurl/web-mobile0528/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '真让我头大 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '全民拆墙大作战',
        'desc': '',
        'url': 'https://si.ali.landintheair.com/gamepass.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '全民拆墙大作战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '口袋妖妖2',
        'desc': '',
        'url': 'https://minigame.test.joyelement.cn/h5/minigame/kdyy/H5/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '口袋妖妖2 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '高塔对决',
        'desc': '',
        'url': 'https://web.tabiyouxi.com/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '高塔对决 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '疯狂解压/合成我最牛',
        'desc': '',
        'url': 'https://h5.xiaoyouxi.co/gunheadshot/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '疯狂解压/合成我最牛 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '武器锻造大亨',
        'desc': '',
        'url': 'https://qtweb.qtjoy.com/externalWeb/LYL/JumpKnife/V3/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '武器锻造大亨 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '烧脑超好玩',
        'desc': '',
        'url': 'https://qtweb.qtjoy.com/externalWeb/XJun/RelaxBox_Cocos3D/V1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '烧脑超好玩 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我叫大聪明/营救动物猪',
        'desc': '',
        'url': 'https://qtweb.qtjoy.com/externalWeb/ZY/PiggyRescue_DaBaZhu_Cocos3D/2/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我叫大聪明/营救动物猪 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '异世冲冲冲',
        'desc': '',
        'url': 'https://game.sfplay.net/ym/web-mobile/1.0.2/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '异世冲冲冲 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '酒店大亨',
        'desc': '',
        'url': 'https://si.ali.landintheair.com/gamepass.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '酒店大亨 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '成语猜个爽',
        'desc': '',
        'url': 'https://h5.cjs001.com/game/qiMiaoDeWenZi/tt_20250411/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '成语猜个爽 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '高手游戏王',
        'desc': '',
        'url': 'https://cos.umgame.cn/minigame_remote/minigame/cc/tcg2d/10918/web/h5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '高手游戏王 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '拼不过我呀',
        'desc': '',
        'url': 'https://idata.igame58.com/h5/bttx_tt/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '拼不过我呀 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '地府传说',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/185_1748426086026/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '地府传说 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '画线营救老王',
        'desc': '',
        'url': 'http://xcx.youletd.com/test/h5/hxyjlw/v101/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '画线营救老王 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我是小小精英',
        'desc': '',
        'url': 'https://spwinner.cdn.xiaojing.work/dy_wo_shi_xiao_xiao_jing_ying/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我是小小精英 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '谁是大卧底/超级大卧底',
        'desc': '',
        'url': 'https://si.ali.landintheair.com/gamepass.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '谁是大卧底/超级大卧底 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '反派我当定了',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/265_1748338516191/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '反派我当定了 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超级小天才',
        'desc': '',
        'url': 'http://xcx.youletd.com/file/h5/cjxtc/v100/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超级小天才 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '极品登山摩托',
        'desc': '',
        'url': 'http://xcx.youletd.com/file/h5/jpdsmt/v100/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '极品登山摩托 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '沉浸解压大师',
        'desc': '',
        'url': 'https://qtweb.qtjoy.com/externalWeb/LYL/CuttingMaster/V1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '沉浸解压大师 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '闯关小探险',
        'desc': '',
        'url': 'https://assets.naitanghuyu.com/preview/2501/cgxtx/0.0.4/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '闯关小探险 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '察言观色',
        'desc': '',
        'url': 'https://renyousome.renyouwangluo.cn/remoteGame/web_cygs_05301/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '察言观色 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '回忆供销社',
        'desc': '',
        'url': 'https://mini.ssflashgo.com//stonesh/hanzizhaochawang_nostalgia/web/external_link/web-mobile/index.html?getPlatformType=Pc_ZhiBo',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '回忆供销社 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '贪吃鬼超进化',
        'desc': '',
        'url': 'https://h5.xiaoyouxi.co/tanchiguijinhua/H5-250411/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '贪吃鬼超进化 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这关包好玩的',
        'desc': '',
        'url': 'https://cos.umgame.cn/minigame_preview/10981/webjump/webjumpnet/web10981g/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这关包好玩的 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑力爆表王',
        'desc': '',
        'url': 'https://cdn.qugukeji.com/Game/NaoLiBaoBiaoWang/Web/Debug2/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑力爆表王 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这关真不行',
        'desc': '',
        'url': 'https://pub.selpay.cn/games/zgzbx/1.0.8/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这关真不行 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '挑战通关',
        'desc': '',
        'url': 'https://cdn.105775.cn/tiaozhantongguan/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '挑战通关 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '神速大冲关',
        'desc': '',
        'url': 'https://res.game.7to.cn/gameres/pgame2/kxccg/game/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '神速大冲关 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '乱斗小小兵/进击小小兵',
        'desc': '',
        'url': 'https://game2.sfplay.net/PinballWarrior/dy/v2/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '乱斗小小兵/进击小小兵 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '无敌闯关王/你在秀什么',
        'desc': '',
        'url': 'https://game.sfplay.net/ps/GearBag/6/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '无敌闯关王/你在秀什么 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '山海经进化模拟',
        'desc': '',
        'url': 'http://obsview.zywxgames.com/new-resources/Users/Fan/Szh/202505/web/shjjhmn/8/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '山海经进化模拟 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '节拍达人',
        'desc': '',
        'url': 'http://obsview.zywxgames.com/new-resources/Users/Fan/Szh/202505/web/jpdr/8/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '节拍达人 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '贴纸大作战',
        'desc': '',
        'url': 'https://lfrjtxx-cou.gusspro.com/app-3/Test/msp_lt/DRGM/1.00/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '贴纸大作战 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '贴纸大作战密码文档',
        'desc': '密码点击下方链接查看',
        'url': 'https://docs.qq.com/smartsheet/DU1JuaVdyRXBybkRw?nlc=1&tab=tGwetx&viewId=vq3gb2',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '贴纸大作战密码文档 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '来玩安静书',
        'desc': '',
        'url': 'http://obsview.zywxgames.com/new-resources/Users/Jlong/ZW/2025522/web/lProp/lwajs/noPackage/04/04EsNvvbKSQTe3wJYN/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '来玩安静书 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '哪吒安静书',
        'desc': '',
        'url': 'http://obsview.zywxgames.com/new-resources/Users/Lu/Wjj/202505/web/nzajs/01/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '哪吒安静书 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '双人竞技场',
        'desc': '',
        'url': 'https://jdphrvv-kc.godricc.com/app-4/release/preview/sryx/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '双人竞技场 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '双人竞技场密码文档',
        'desc': '密码点击下方链接查看',
        'url': 'https://docs.qq.com/smartsheet/DU1JuaVdyRXBybkRw?nlc=1&tab=tGwetx&viewId=vq3gb2',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '双人竞技场密码文档 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '节奏盒子安静书',
        'desc': '',
        'url': 'http://obsview.zywxgames.com/new-resources/Users/Lu/Wjj/202505/web/lwajs/02/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '节奏盒子安静书 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超级开局/无敌开局',
        'desc': '',
        'url': 'https://debug.pumpkinheadgame.online/Slime/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超级开局/无敌开局 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '收纳小筑',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/28030/web/1.0.4/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '收纳小筑 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '千金筑梦物语',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/28030/web/1.0.6/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '千金筑梦物语 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '解压猫咪',
        'desc': '',
        'url': 'https://cdn.smartfoxgames2.xyz/cats/cat_web_m.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '解压猫咪 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消消就消消',
        'desc': '',
        'url': 'https://aaa.puffergames.com/GameServerData2/Cocos/TZDZZ_H5/5_30/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消消就消消 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '最强一刀流',
        'desc': '',
        'url': 'https://si.ali.landintheair.com/gamepass.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '最强一刀流 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消除超简单',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/huangyujie/ScrewBusMaoXian/TT/noad03/webgl/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消除超简单 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我是妖精',
        'desc': '',
        'url': 'https://minigame.test.joyelement.cn/h5/minigame/wsyj/H5/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我是妖精 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '拯救小鲸鱼行动',
        'desc': '',
        'url': 'http://xcx.youletd.com/file/h5/jjxjyxd/v100/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '拯救小鲸鱼行动 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我要当地主',
        'desc': '',
        'url': 'https://assets.yzqgamefun.com/packages/woyaodangdizhu/web/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我要当地主 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '疯狂粉末沙盒',
        'desc': '',
        'url': 'https://cdn-hs.guoyue.games/games/sandbox/web-mobile-new/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '疯狂粉末沙盒 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '守住这个塔',
        'desc': '',
        'url': 'https://tos.qwpo2018.com/mp/game/web/gm/swlm_93a83ae9f78e3978bf7230667d1f8b4e/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '守住这个塔 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我蛮厉害的',
        'desc': '',
        'url': 'https://game2.sfplay.net/MonsterHunter/v1.0.0/v13/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我蛮厉害的 休闲益智 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '排了个牌',
        'desc': '',
        'url': 'http://gameplgp.zycsfun.com/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '排了个牌 休闲益智 综合',
        'highlight': false,
        'recommended': false
      }
    ]
  },
  '角色扮演': {
    '冒险闯关': [
      {
        'title': '球球的冒险之旅',
        'desc': '',
        'url': 'https://xcx.youletd.com/test/web/skyBall/v117/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '球球的冒险之旅 角色扮演 冒险闯关',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '蚂蚁冒险记',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/286_1750213540391/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '蚂蚁冒险记 角色扮演 冒险闯关',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '鸠摩大侠转转刀/转刀江湖',
        'desc': '',
        'url': 'http://47.92.128.120:18080/jmdxzzd/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '鸠摩大侠转转刀/转刀江湖 角色扮演 冒险闯关',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '一笑江湖',
        'desc': '',
        'url': 'https://cdn.i20.top/testgame/gearWar/web/4/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '一笑江湖 角色扮演 冒险闯关',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '狩猎勇者 勇者小队',
        'desc': '',
        'url': 'https://littlegames.tomato123.cn/8/yongzhexiaodui-preview/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '狩猎勇者 勇者小队 角色扮演 冒险闯关',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '命运主宰者',
        'desc': '',
        'url': 'https://cos.mjh5.cn/thief/game/1.0.2/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '命运主宰者 角色扮演 冒险闯关',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '命运主宰者',
        'desc': '',
        'url': 'https://cos.mjh5.cn/thief/game/1.0.2/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '命运主宰者 角色扮演 冒险闯关',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '像素勇者世界',
        'desc': '',
        'url': 'https://cpgame-1259238728.file.myqcloud.com/pixelWorld/test/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '像素勇者世界 角色扮演 冒险闯关',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '大侠传说',
        'desc': '',
        'url': 'https://static-cdn.zhouhy.net/h5/project/qingdu/web/huochairen-brothergo/1/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '大侠传说 角色扮演 冒险闯关',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '帽子先生大冒险',
        'desc': '',
        'url': 'http://lyngames-1302407170.cos.ap-guangzhou.myqcloud.com/shenhe/mzxsdmx/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '帽子先生大冒险 角色扮演 冒险闯关',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '宝皮龙大冒险',
        'desc': '',
        'url': 'https://renyousome.renyouwangluo.cn/remoteGame/bpldmx_dr/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '宝皮龙大冒险 角色扮演 冒险闯关',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '勇者无敌',
        'desc': '',
        'url': 'https://game.hdbuyu.com/yzwd',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '勇者无敌 角色扮演 冒险闯关',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '纸上当大侠',
        'desc': '',
        'url': 'https://game2.sfplay.net/PracticeSwords_match/v1.0.0/v1',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '纸上当大侠 角色扮演 冒险闯关',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '纯爱冒险记',
        'desc': '',
        'url': 'http://cy.mirahs.top/mlmxj/index.html?v1.0.0',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '纯爱冒险记 角色扮演 冒险闯关',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这就是冒险（进入会黑屏5-10秒耐心等待即可）',
        'desc': '',
        'url': 'https://oss.tobetopone.com/h5/zjsmx/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这就是冒险（进入会黑屏5-10秒耐心等待即可） 角色扮演 冒险闯关',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小蚂蚁冒险/蚂蚁搬个家/口袋蚁穴',
        'desc': '',
        'url': 'https://cdn.moblazer.com/antcolony/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小蚂蚁冒险/蚂蚁搬个家/口袋蚁穴 角色扮演 冒险闯关',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '村头大冒险',
        'desc': '',
        'url': 'http://ct-dy-cdn.topjoy.com/web/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '村头大冒险 角色扮演 冒险闯关',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '菜鸡闯江湖/绝地幸存',
        'desc': '',
        'url': 'https://cdn.greatgood666.com/JueDiXingCun/WEB/1218/web-desktop/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '菜鸡闯江湖/绝地幸存 角色扮演 冒险闯关',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '冒险小英雄',
        'desc': '',
        'url': 'https://xyrzz2.shisuiwang.top/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '冒险小英雄 角色扮演 冒险闯关',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '街头大侠',
        'desc': '',
        'url': 'https://cooperation.pailedi.com/web2/dingbowen/jtdx/web/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '街头大侠 角色扮演 冒险闯关',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '夸父冒险日记',
        'desc': '',
        'url': 'https://ysxxtech.com/nodeserver/kualog/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '夸父冒险日记 角色扮演 冒险闯关',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '狗子大冒险',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/172_1741341932443/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '狗子大冒险 角色扮演 冒险闯关',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '剑与冒险',
        'desc': '',
        'url': 'https://www.lekonghd.cn/zzz/33S50z72M1125420A',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '剑与冒险 角色扮演 冒险闯关',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '最强毒液/毒液入侵/变身毒液人/画线杀手/大侠一起闯',
        'desc': '',
        'url': 'http://debug.pumpkinheadgame.online/Run',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '最强毒液/毒液入侵/变身毒液人/画线杀手/大侠一起闯 角色扮演 冒险闯关',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '趣消大冒险',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/28028/test/1.0.3/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '趣消大冒险 角色扮演 冒险闯关',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '魔性大冒险/无限大对决',
        'desc': '',
        'url': 'https://game2.sfplay.net/BraveTower/v1.3.7/v2/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '魔性大冒险/无限大对决 角色扮演 冒险闯关',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消除我很溜/英雄冒险闯关',
        'desc': '',
        'url': 'https://cpzycdn.dianwanshidai.com/ByteDance/YXCGMX/12/23/PM/17/53/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消除我很溜/英雄冒险闯关 角色扮演 冒险闯关',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '冒险之战',
        'desc': '',
        'url': 'https://ludoking.xiaoduogame.cn/mxzzgm5/index.html?gmDebug=true',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '冒险之战 角色扮演 冒险闯关',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '勇者迷阵行',
        'desc': '',
        'url': 'https://h5.xiaoyouxi.co/camosniper/h5/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '勇者迷阵行 角色扮演 冒险闯关',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '秘境奇遇大冒险',
        'desc': '',
        'url': 'https://h5.xiaoyouxi.co/ridemaster/H5-250508/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '秘境奇遇大冒险 角色扮演 冒险闯关',
        'highlight': false,
        'recommended': false
      }
    ],
    '仙侠修真': [
      {
        'title': '我欲成仙',
        'desc': '',
        'url': 'https://game.hongshunet.com/wenyun/GGCS/TT/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我欲成仙 角色扮演 仙侠修真',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '修仙来了',
        'desc': '',
        'url': 'https://littlegame.tomato123.cn/CQYGXE/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '修仙来了 角色扮演 仙侠修真',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '逍遥仙剑传',
        'desc': '',
        'url': 'https://littlegame.tomato123.cn/XYXXZ/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '逍遥仙剑传 角色扮演 仙侠修真',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '重生之都市仙帝',
        'desc': '',
        'url': 'https://chengdu.redraingame.com/html_xiao_fan/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '重生之都市仙帝 角色扮演 仙侠修真',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '全民养神仙',
        'desc': '',
        'url': 'https://static-cdn.zhouhy.net/game_laoyuan/Immortalstall/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '全民养神仙 角色扮演 仙侠修真',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '穿越到洪荒宅家修仙',
        'desc': '',
        'url': 'http://www.banboog.cn/remote/EasternFantasyHHZJ/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '穿越到洪荒宅家修仙 角色扮演 仙侠修真',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '咻咻剑仙',
        'desc': '',
        'url': 'https://web-project.feigo.fun/douyin-xxfj',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '咻咻剑仙 角色扮演 仙侠修真',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我不修仙只练剑/出招吧大侠/拿下一座城（修仙）',
        'desc': '',
        'url': 'https://game2.sfplay.net/PracticeSwords/v1.1.5/v4/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我不修仙只练剑/出招吧大侠/拿下一座城（修仙） 角色扮演 仙侠修真',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '仙途问剑',
        'desc': '',
        'url': 'https://yygame.mmopk.net/ImmortalPath/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '仙途问剑 角色扮演 仙侠修真',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小小修仙传/上剑不练练下剑/金剑不练练银剑/无尽飞剑（加载慢需要5~15秒，请耐心等待）',
        'desc': '',
        'url': 'https://web-project.feigo.fun/douyin-xxxxz1/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小小修仙传/上剑不练练下剑/金剑不练练银剑/无尽飞剑（加载慢需要5~15秒，请耐心等待） 角色扮演 仙侠修真',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '悟空修仙传',
        'desc': '',
        'url': 'https://cdn.bzgame.net/web/web-desktop-mobile-0213-online-hideAd-fix1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '悟空修仙传 角色扮演 仙侠修真',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小花仙换装公主',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/280_1744340552254/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小花仙换装公主 角色扮演 仙侠修真',
        'highlight': false,
        'recommended': false
      }
    ]
  },
  '模拟经营': {
    '逆袭人生': [
      {
        'title': '重生当首富/我摊牌了/爽游天花板/老六驾到/开局富一代（第一次进不去就退出多进几次）',
        'desc': '',
        'url': 'https://qcdn.bdoggame.com/ttgame/csdsf/webVer/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '重生当首富/我摊牌了/爽游天花板/老六驾到/开局富一代（第一次进不去就退出多进几次） 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '穷人逆袭记/疯狂模拟器/穿越法则/赚钱我在行/打工皇帝/咸鱼翻身记/男人一直冲/全城你最牛/这不是挑战',
        'desc': '',
        'url': 'https://gamebm.keepmobi.com/web-games/zhiPaiRenSheng/chuanYueFaZe/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '穷人逆袭记/疯狂模拟器/穿越法则/赚钱我在行/打工皇帝/咸鱼翻身记/男人一直冲/全城你最牛/这不是挑战 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '逆袭大消除',
        'desc': '',
        'url': 'https://www.yyqyueyouqu.cn/yueyouqu/nxxc/web/0.1.5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '逆袭大消除 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '家族人生',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.net/wb_webview/cardlift/h5-jzrs/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '家族人生 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '赘婿的逆袭',
        'desc': '',
        'url': 'http://d.glf2ym.cn/mHhY4Y',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '赘婿的逆袭 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '喵喵人生',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/28005/web/1.0.1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '喵喵人生 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '回到古代当帝王',
        'desc': '',
        'url': 'https://security.feishu.cn/link/safety?target=https%3A%2F%2Frenyounew.renyouwangluo.cn%2FremoteGame%2FHdgddhdGame&scene=ccm&logParams=%7B%22location%22%3A%22ccm_default%22%7D&lang=zh-CN',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '回到古代当帝王 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '挖掘机逆袭记',
        'desc': '',
        'url': 'https://test-cdn.ququwangluo.com/excavator/dr/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '挖掘机逆袭记 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '二狗逆袭记',
        'desc': '',
        'url': 'https://littlegame.tomato123.cn/unbox/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '二狗逆袭记 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超级人生赢家',
        'desc': '',
        'url': 'https://ume-1306566067.cos.ap-guangzhou.myqcloud.com/games/investment-counterattack/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超级人生赢家 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '当总裁有多爽',
        'desc': '',
        'url': 'https://oss.zhejing.tech/webH5/career-tiktok-zongcaiweiwu/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '当总裁有多爽 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我的逆袭人生',
        'desc': '',
        'url': 'https://security.feishu.cn/link/safety?target=https%3A%2F%2Fz10.tanyu.mobi%2Ftanpaixyx%2F210007%2Fwodett%2Fdarenshow%2Findex.html&scene=ccm&logParams=%7B%22location%22%3A%22ccm_default%22%7D&lang=zh-CN',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我的逆袭人生 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '疯狂逆袭记/全民逆袭',
        'desc': '',
        'url': 'https://changshazhise01-1254961065.cos.ap-guangzhou.myqcloud.com/zhise/qmnx/20230914/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '疯狂逆袭记/全民逆袭 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '赘婿逆袭记',
        'desc': '',
        'url': 'https://hscdn1.quanmin-game.com/game/CountOnMe/test/202310231600/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '赘婿逆袭记 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '人生逆袭记',
        'desc': '',
        'url': 'https://res.game.7to.cn/gameres/pgame2/dgnxj/lkz92fxv/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '人生逆袭记 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我要当食神/街头美食逆袭',
        'desc': '',
        'url': 'https://daren.glifegame.com/nxmsj/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我要当食神/街头美食逆袭 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小帅逆袭记',
        'desc': '',
        'url': 'https://mini.ssflashgo.com/stonesh/v-lez/backToFeedYou/web/1110_1835/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小帅逆袭记 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '逆袭人生',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/28011/web/1.0.0/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '逆袭人生 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '逆袭人生老',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/28011/web/1.0.0/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '逆袭人生老 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小卡拉逆袭记',
        'desc': '',
        'url': 'https://cdngame.shuling.vip/BianJuDaShi/KaLaNiXi/H5/web-mobile/index.html?V1.0.1',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小卡拉逆袭记 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '地表最强逆袭圣诞版',
        'desc': '',
        'url': 'http://cy.mirahs.top/maomixmas/index.html?v1.0.1',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '地表最强逆袭圣诞版 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '人生轨迹模拟器',
        'desc': '',
        'url': 'https://game2.sfplay.net/lifepath/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '人生轨迹模拟器 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '猪哥的幸福人生',
        'desc': '',
        'url': 'https://cdn.zhang-xian.com/cocos-raising-pigs/wx-mini-game.qiniu.cut-grass/web-mobile-tt/1.3.4/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '猪哥的幸福人生 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '逆袭大明星',
        'desc': '',
        'url': 'https://res.innofuns.com/h5/WY_ZFDH/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '逆袭大明星 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '地表最强逆袭龙年版',
        'desc': '',
        'url': 'http://cy.mirahs.top/mlmxjdragon/index.html?v1.0.0=',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '地表最强逆袭龙年版 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '龙的土豪人生',
        'desc': '',
        'url': 'http://ml.beihaixunmai.com/ml/webgl_1.0.9/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '龙的土豪人生 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '逆袭之重回巅峰',
        'desc': '',
        'url': 'https://cdn.guoyue.games/games/wyny/web-mobile_zs/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '逆袭之重回巅峰 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '豪赚人生',
        'desc': '',
        'url': 'https://test-cdn.ququwangluo.com/excavator/dr/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '豪赚人生 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '逆袭之王',
        'desc': '',
        'url': 'https://keepmobi.com/remote-res/qiong-ren-ni-xi-ji/web/ks_gqsxz/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '逆袭之王 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这就是逆袭',
        'desc': '',
        'url': 'https://h5game.godricc.com/out/plotjam/v3/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这就是逆袭 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '收纳人生',
        'desc': '',
        'url': 'https://www.lekonghd.cn/newsndrs/3.1.6/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '收纳人生 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '逆袭奇遇记（进入会黑屏5-10秒耐心等待即可）',
        'desc': '',
        'url': 'https://tos.qwpo2018.com/mp/game/web/gm/49c74290b2bf5734301b4c91376c3243/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '逆袭奇遇记（进入会黑屏5-10秒耐心等待即可） 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超级人生赢家（加载慢需要25～30秒然后黑屏10秒，请耐心等待）',
        'desc': '',
        'url': 'https://res.sjzgxwl.com/CHZ/GameWeb/QG_zx2_202405211631/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超级人生赢家（加载慢需要25～30秒然后黑屏10秒，请耐心等待） 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '模拟重启人生',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/005_1719388827805/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '模拟重启人生 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '来解压啦（逆袭）',
        'desc': '',
        'url': 'https://sl233.com/SPA/web-zhise/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '来解压啦（逆袭） 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我必成佛/石猴逆袭记',
        'desc': '',
        'url': 'https://bhr.yudiangame.vip/406Web/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我必成佛/石猴逆袭记 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '二狗逆袭记/废柴修仙',
        'desc': '',
        'url': 'https://littlegame.tomato123.cn/unbox/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '二狗逆袭记/废柴修仙 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '体验人生模拟',
        'desc': '',
        'url': 'https://testupdate.chutaonet.cn/tiyanrenshengmoni/web_game/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '体验人生模拟 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '无聊人生/豪赚人生',
        'desc': '',
        'url': 'https://game-res.tos-cn-beijing.volces.com/web-games/wu_liao_ren_sheng/1.0.3hhg/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '无聊人生/豪赚人生 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '重生逆转人生',
        'desc': '',
        'url': 'https://game2.sfplay.net/Reigns/v1.1.0/v2/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '重生逆转人生 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超级逆袭/高情商选择/张三列传/穷人逆袭记高手（逆袭版）',
        'desc': '',
        'url': 'https://keepmobi.com/remote-res/qiong-ren-ni-xi-ji/web/ks_gqsxz/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超级逆袭/高情商选择/张三列传/穷人逆袭记高手（逆袭版） 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我的逆袭人生',
        'desc': '',
        'url': 'https://security.feishu.cn/link/safety?target=https%3A%2F%2Fz10.tanyu.mobi%2Ftanpaixyx%2F210007%2Fwodett%2Fdarenshow%2Findex.html&scene=ccm&logParams=%7B%22location%22%3A%22ccm_default%22%7D&lang=zh-CN',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我的逆袭人生 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '逆袭新人生',
        'desc': '',
        'url': 'https://gamecdn.xzwgameserver.host/lxxrs/lxxrs-web/1.0.1/index.html?ma_callerProcessIdentify=%3AminiappX&ma_callbackId=1&disable_auto_expose=1&enable_webview_select_search=1&need_out_animation=right&font_scale=1.0',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '逆袭新人生 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '魅力人生',
        'desc': '',
        'url': 'https://file.gugudang.com/res/down/public/p_gaogenxie/web/mlrs/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '魅力人生 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '天命逆袭',
        'desc': '',
        'url': 'https://daren.glifegame.com/piggy2_test/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '天命逆袭 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '都市逆袭人生/漂亮的反击/占山为王',
        'desc': '',
        'url': 'https://res.wqop2018.com/partner/cdbhy/pldfj/CityNoCity/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '都市逆袭人生/漂亮的反击/占山为王 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '重返97成首富',
        'desc': '',
        'url': 'https://tt-1301729538.cos-website.ap-guangzhou.myqcloud.com/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '重返97成首富 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '少爷逆袭记/老逆转人生/落魄少爷逆袭记',
        'desc': '',
        'url': 'http://d.glf2ym.cn/5rtDW8',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '少爷逆袭记/老逆转人生/落魄少爷逆袭记 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超级人生',
        'desc': '',
        'url': 'https://res.wqop2018.com/partner/cdbhy/mndzz/Ancestor/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超级人生 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '人生模拟器',
        'desc': '',
        'url': 'https://tt-1256600868.cos.ap-chengdu.myqcloud.com/free/life/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '人生模拟器 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '逆袭王者/101次重来/纸牌人生',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/cardlift/h5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '逆袭王者/101次重来/纸牌人生 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '人生逆袭进化/怪诞的冒险/开局一个亿/暴走的人生',
        'desc': '',
        'url': 'https://qcdn.bdoggame.com/ttgame/kjygy/webVer/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '人生逆袭进化/怪诞的冒险/开局一个亿/暴走的人生 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '首富成长记',
        'desc': '',
        'url': 'https://miaoyou888.com/nixi/nixi_v1.0.3/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '首富成长记 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '人生泰裤辣',
        'desc': '',
        'url': 'https://www.yzqgamefun.com/packages/RenshengTaikula/web/version106/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '人生泰裤辣 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '逆袭王者',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/h5base/n5xh/index.html?111',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '逆袭王者 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开局已是巅峰/我真没想重生（逆袭）/最惨打工人/梦想改造师/躺赢玩家/人生重开之我穿越了',
        'desc': '',
        'url': 'https://wsdw.dengdengkeji.com/toutai-qixiang/web0.0.4/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开局已是巅峰/我真没想重生（逆袭）/最惨打工人/梦想改造师/躺赢玩家/人生重开之我穿越了 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '成功人生逆袭记/新人生轨迹模拟器/又菜又爱玩/重生逆转人生',
        'desc': '',
        'url': 'https://game2.sfplay.net/Bankruptcy/v1.0.0/v2',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '成功人生逆袭记/新人生轨迹模拟器/又菜又爱玩/重生逆转人生 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '成功人生逆袭记/新人生轨迹模拟器/又菜又爱玩/重生逆转人生',
        'desc': '',
        'url': 'https://game2.sfplay.net/Bankruptcy/v1.2.0/v3/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '成功人生逆袭记/新人生轨迹模拟器/又菜又爱玩/重生逆转人生 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '纸牌人生/高情商选择/摆烂吧老铁',
        'desc': '',
        'url': 'https://gametos.keepmobi.com/web-games/zhiPaiRenSheng/gg/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '纸牌人生/高情商选择/摆烂吧老铁 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '纸牌人生/高情商选择/摆烂吧老铁',
        'desc': '',
        'url': 'https://gametos.keepmobi.com/remote-res/zhi-pai-ren-sheng/web/1.1.2/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '纸牌人生/高情商选择/摆烂吧老铁 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '好玩个锤子/逆袭的一生',
        'desc': '',
        'url': 'https://oss.tobetopone.com/h5/playHammer/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '好玩个锤子/逆袭的一生 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '咸鱼逆袭（小兵）',
        'desc': '',
        'url': 'https://daren.glifegame.com/fish_tuyue/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '咸鱼逆袭（小兵） 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '人生重开有多好/人生重启有多好/咸鱼逆袭',
        'desc': '',
        'url': 'https://rsckydh.jilaihuyu.com/dr/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '人生重开有多好/人生重启有多好/咸鱼逆袭 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '人生逆袭路',
        'desc': '',
        'url': 'https://game2.sfplay.net/Phoenix/bytedance/v2/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '人生逆袭路 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '胡牌人生',
        'desc': '',
        'url': 'https://res-1305296755.cos.ap-guangzhou.myqcloud.com/2025/%E4%BD%93%E9%AA%8C%E9%93%BE%E6%8E%A5/%E6%8A%96%E9%9F%B3%E8%83%A1%E7%89%8C%E4%BA%BA%E7%94%9F/web-mobile-1.0.1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '胡牌人生 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '命运之王/重启人生',
        'desc': '',
        'url': 'https://res5.eqmobi.com/monopoly/myzw_20250421_1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '命运之王/重启人生 模拟经营 逆袭人生',
        'highlight': false,
        'recommended': false
      }
    ],
    '餐厅小店': [
      {
        'title': '拼图梦工厂',
        'desc': '',
        'url': 'https://seeg-minigame-preview-3add3caa90-1307405015.tcloudbaseapp.com/ptmgc/WebGL/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '拼图梦工厂 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '重生道长模拟器/重生之我被仙女包围了/摆烂式修仙/重生人间再修仙/带着系统玩修仙/爽文修仙指南/修仙人格模拟器/小白修炼计划/异界修炼传说/重生一代宗师/寻道挂机修真/寻道挂机修仙',
        'desc': '',
        'url': 'https://blsxx.jilaihuyu.com/web/xiaobai/1.6.5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '重生道长模拟器/重生之我被仙女包围了/摆烂式修仙/重生人间再修仙/带着系统玩修仙/爽文修仙指南/修仙人格模拟器/小白修炼计划/异界修炼传说/重生一代宗师/寻道挂机修真/寻道挂机修仙 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我在海上餐厅刮鱼鳞/海上餐厅刮鱼鳞高手/刮鱼鳞大师/我要爽一爽/叉鱼大作战/解压就是爽/刮鱼鳞挑战/刮刮刮鱼鳞/小人和小船海上餐厅/刮鱼鳞餐厅大师',
        'desc': '',
        'url': 'https://cdn.cdlionhead.com/minigame/Scale_the_Depths/noads/2.6/Index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我在海上餐厅刮鱼鳞/海上餐厅刮鱼鳞高手/刮鱼鳞大师/我要爽一爽/叉鱼大作战/解压就是爽/刮鱼鳞挑战/刮刮刮鱼鳞/小人和小船海上餐厅/刮鱼鳞餐厅大师 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开个大卖场',
        'desc': '',
        'url': 'https://www.lekonghd.cn/kgdmctt/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开个大卖场 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超市模拟器3D',
        'desc': '',
        'url': 'http://kaigdcsdl.leiting.com/web1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超市模拟器3D 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '山海异兽模拟器',
        'desc': '',
        'url': 'http://obsview.zywxgames.com/new-resources/Users/Lu/Wjj/202506/web/wgysjh/10/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '山海异兽模拟器 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开店不打烊',
        'desc': '',
        'url': 'https://h5.xiaoyouxi.co/konglong/H5-250311/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开店不打烊 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开店做富翁',
        'desc': '',
        'url': 'http://h5.xiaoyouxi.co/pizza/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开店做富翁 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '收租生活日记',
        'desc': '',
        'url': 'http://d.glf2ym.cn/fe2Cz5',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '收租生活日记 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '搬砖模拟器',
        'desc': '',
        'url': 'https://lwfsj-1256464321.cos.ap-guangzhou.myqcloud.com/1.1.6/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '搬砖模拟器 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '夜市之王',
        'desc': '',
        'url': 'https://www.lekonghd.cn/yszw/0.0.3/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '夜市之王 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '夜市小当家',
        'desc': '',
        'url': 'http://game.i66wan.com/h5resource/goodspeed/ysxdj/h5/v0/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '夜市小当家 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '洗浴中心模拟器',
        'desc': '',
        'url': 'https://game2.sfplay.net/bathing3D/v1',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '洗浴中心模拟器 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开个大工厂',
        'desc': '',
        'url': 'https://cdn.hanyougame.cn/ChongFanJiuLing/webgame/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开个大工厂 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '夜市餐厅',
        'desc': '',
        'url': 'https://game2.sfplay.net/nightMarket/v1',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '夜市餐厅 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '乐玩英雄模拟器',
        'desc': '',
        'url': 'https://game.zyx268.com/trialGame/leWanYingXiongMoNiQi_DeskTop/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '乐玩英雄模拟器 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开车模拟器',
        'desc': '',
        'url': 'https://file.gugudang.com/res/down/public/p_qiche/web/lts/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开车模拟器 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '神仙也摆摊',
        'desc': '',
        'url': 'https://static-cdn.zhouhy.net/game_laoyuan/Immortalstall/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '神仙也摆摊 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '居家模拟器',
        'desc': '',
        'url': 'https://xiaoxiang-1300577131.cos.ap-nanjing.myqcloud.com/h5Game/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '居家模拟器 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '钓鱼模拟器',
        'desc': '',
        'url': 'https://game2.sfplay.net/fish_assets/externallink/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '钓鱼模拟器 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '大排档模拟器',
        'desc': '',
        'url': 'https://game-pkg.dooowin.com/open/g93/2024-01-17/Eky2fxAs/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '大排档模拟器 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '捡钱我最行/经营我特牛',
        'desc': '',
        'url': 'http://mrw.so/6gzqQY',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '捡钱我最行/经营我特牛 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '打工模拟器',
        'desc': '',
        'url': 'https://damnq-1259238728.file.myqcloud.com/test/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '打工模拟器 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '鉴宝模拟器',
        'desc': '',
        'url': 'https://lf3-stark-cdn.bdgp.cc/obj/lf-game-lf/gdl_app_865/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '鉴宝模拟器 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '夜市之王',
        'desc': '',
        'url': 'https://www.lekonghd.cn/yszw/0.0.5/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '夜市之王 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我靠经营致富',
        'desc': '',
        'url': 'http://d.glf2ym.cn/YhjGYM',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我靠经营致富 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '猫猫餐厅',
        'desc': '',
        'url': 'https://preview-1253953345.cos.ap-nanjing.myqcloud.com/cat/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '猫猫餐厅 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '收纳模拟器',
        'desc': '',
        'url': 'http://112.74.33.201:8080/cnmnq',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '收纳模拟器 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我的摆摊日子',
        'desc': '',
        'url': 'https://res.wqop2018.com/partner/xamy/wdbtrz/h5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我的摆摊日子 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '居家模拟器',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/noadgame/screwJam/20240524WSLSW/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '居家模拟器 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '店长模拟器（加载慢需要5~15秒，请耐心等待）',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.net/wb_webview/myDog/openShop/daren/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '店长模拟器（加载慢需要5~15秒，请耐心等待） 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '沙场发育模拟器',
        'desc': '',
        'url': 'http://cdn.hanyougame.cn/scfy/webmobile3/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '沙场发育模拟器 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '打工模拟器',
        'desc': '',
        'url': 'https://damnq-1259238728.file.myqcloud.com/test/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '打工模拟器 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '挖沙工厂模拟器',
        'desc': '',
        'url': 'https://sdk.hwengame.com/IssuerPack/IdleSandWebGL/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '挖沙工厂模拟器 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '水坝建造模拟器',
        'desc': '',
        'url': 'https://sdk.hwengame.com/IssuerPack/IdleDamBuild/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '水坝建造模拟器 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '奸商模拟器',
        'desc': '',
        'url': 'https://kjmnq-1259238728.file.myqcloud.com/test/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '奸商模拟器 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '驾照模拟器',
        'desc': '',
        'url': 'https://renyousome.renyouwangluo.cn/remoteGame/jzmnq/?_refluxos=a10',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '驾照模拟器 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '石油工厂大亨',
        'desc': '',
        'url': 'https://sdk.hwengame.com/IssuerPack/IdleOil/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '石油工厂大亨 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '无限经营',
        'desc': '',
        'url': 'https://juezhongjue-1320710492.cos.ap-nanjing.myqcloud.com/ZhanZhengBeiBao/web_0123/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '无限经营 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开店就是玩',
        'desc': '',
        'url': 'https://szj.txhy1699.com/movie/ver004/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开店就是玩 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '模拟超市',
        'desc': '',
        'url': 'https://cos.umgame.cn/minigame_preview/10439/1.15.5/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '模拟超市 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '鸡蛋工厂大亨',
        'desc': '',
        'url': 'https://sdk.hwengame.com/IssuerPack/IdleEgg_0/Build/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '鸡蛋工厂大亨 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '工地模拟器',
        'desc': '',
        'url': 'https://h5.cjs001.com/game/ThreadFill/DouYin_WebGL_V18/Release/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '工地模拟器 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我的模拟超市/华尔街之王/我靠经营致富/投资大师',
        'desc': '',
        'url': 'https://tianyugame-1259238728.file.myqcloud.com/wdmncs/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我的模拟超市/华尔街之王/我靠经营致富/投资大师 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '披萨工厂',
        'desc': '',
        'url': 'https://cdn-pizzafactory.cygame666.cn/webTT/webTT0/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '披萨工厂 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '白手起家模拟器/爽剧之王',
        'desc': '',
        'url': 'https://daren.glifegame.com/sjzw/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '白手起家模拟器/爽剧之王 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '摆摊高手',
        'desc': '',
        'url': 'https://sanmianti.glifegame.com/roadsideusedcar/minigame/v005/webgl/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '摆摊高手 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '玩了就上头/疯狂烧烤摊/烧烤梦工厂',
        'desc': '',
        'url': 'https://dobestapp.oss-cn-hangzhou.aliyuncs.com/app-1/test/ccsx/publish/100/index-p.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '玩了就上头/疯狂烧烤摊/烧烤梦工厂 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '全民摆摊',
        'desc': '',
        'url': 'https://file-pgame.kidikidi.net/test/beiAnBao/qmbt/web3/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '全民摆摊 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '篮球奥利给，篮球模拟器，重开之篮球之神',
        'desc': '',
        'url': 'http://juzhen-1304272202.cos.ap-guangzhou.myqcloud.com/Basketball/bin/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '篮球奥利给，篮球模拟器，重开之篮球之神 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '解压模拟器',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.net/wb_webview/relaxsimulator-cdn/h5_test2/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '解压模拟器 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '梦幻小吃店/开个西餐厅/网红西餐厅',
        'desc': '',
        'url': 'https://game.csquyou.com/mhxcd/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '梦幻小吃店/开个西餐厅/网红西餐厅 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '全民经营模拟器/全民过家家说明文档',
        'desc': '',
        'url': 'https://e3buvohnri.feishu.cn/docx/Azs9dtH2noVg0bxRN0rcR3zEn3d',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '全民经营模拟器/全民过家家说明文档 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '疯狂模拟器同类型/建造小小世界同类型/穿越法则同类型 （非原游戏）版本一',
        'desc': '',
        'url': 'https://mahjong.wqmss.online/H5/dwycj/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '疯狂模拟器同类型/建造小小世界同类型/穿越法则同类型 （非原游戏）版本一 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '打工生活模拟器',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/168_1745922466338/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '打工生活模拟器 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '糖糖大作战/恋爱餐厅',
        'desc': '',
        'url': 'https://publishing.u3d.cn/game/ttdzz',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '糖糖大作战/恋爱餐厅 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小兵梦工厂',
        'desc': '',
        'url': 'https://mixpet-1255466057.cos.ap-shanghai.myqcloud.com/tower_common_min.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小兵梦工厂 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '噩梦模拟器/猎梦保卫战（同类型）/千万别出声（同类型）/异界探险记（同类型）',
        'desc': '',
        'url': 'https://file.gugudang.com/res/down/public/p_zhuandaokanshu/web-mobile/lts777/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '噩梦模拟器/猎梦保卫战（同类型）/千万别出声（同类型）/异界探险记（同类型） 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '石油工厂大亨',
        'desc': '',
        'url': 'https://sdk.hwengame.com/IssuerPackNew/IdleOilWell_0/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '石油工厂大亨 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '甜狗模拟器',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/142v2_1748575155305/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '甜狗模拟器 模拟经营 餐厅小店',
        'highlight': false,
        'recommended': false
      }
    ]
  },
  '动作射击': {
    '射击狙击': [
      {
        'title': '火力穿透/行星挖掘队/挺住挺住/绝地神射手/蚩尤带我修个仙儿',
        'desc': '',
        'url': 'http://193.112.163.81/ctdx/v1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '火力穿透/行星挖掘队/挺住挺住/绝地神射手/蚩尤带我修个仙儿 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '合了个枪（密码在文档右侧）/一枪成名（在文档叫《合了个枪》密码在文档右侧）',
        'desc': '',
        'url': 'https://si.ali.landintheair.com/gamepass.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '合了个枪（密码在文档右侧）/一枪成名（在文档叫《合了个枪》密码在文档右侧） 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '找出外星人/暴击外星人',
        'desc': '',
        'url': 'https://cos.umgame.cn/minigame_remote/minigame/client/snipingaliensremote/remote/h5/tt_web_default/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '找出外星人/暴击外星人 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '大胃王英雄/最强特工队/我是大高手/开局秀翻天',
        'desc': '',
        'url': 'https://si.ali.landintheair.com/daweiwang/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '大胃王英雄/最强特工队/我是大高手/开局秀翻天 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '狙击外星人/打到100关（外星人）/枪神挑战/瞄准外星人/刺客计划',
        'desc': '',
        'url': 'https://res.kampfiregames.cn/3/99c661dc171a37ce27a79abff37deb89/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '狙击外星人/打到100关（外星人）/枪神挑战/瞄准外星人/刺客计划 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '人类无限进化/莽就完事了/进化战斗王/挂机小小兵/闯关行不行/冒险高高手/出发吧大佬/我不是菜狗/进击的生物',
        'desc': '',
        'url': 'https://game2.sfplay.net/GearEvolution/v1.3.0/v9/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '人类无限进化/莽就完事了/进化战斗王/挂机小小兵/闯关行不行/冒险高高手/出发吧大佬/我不是菜狗/进击的生物 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '全民泡泡闯关（飞机战斗）',
        'desc': '',
        'url': 'https://cdn-najia.cygame666.cn/hitPlane/web-desktop/index1.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '全民泡泡闯关（飞机战斗） 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '火力突围',
        'desc': '',
        'url': 'https://qcdn.bdoggame.com/cdn/release/hcrcl/webVer/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '火力突围 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '战争特工冒险',
        'desc': '',
        'url': 'https://lingmeng-1317113396.cos.ap-guangzhou.myqcloud.com/web/zhanchangtegongmaoxian/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '战争特工冒险 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '极限神枪手',
        'desc': '',
        'url': 'http://xcx.youletd.com/file/h5/jxsqs/v100/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '极限神枪手 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '拆迁特工队',
        'desc': '',
        'url': 'https://si.ali.landintheair.com/gamepass.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '拆迁特工队 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '沙盒枪战王',
        'desc': '',
        'url': 'http://obsview.zywxgames.com/new-resources/Users/Lu/Wjj/202506/web/shqzw/06/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '沙盒枪战王 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '勇者冲锋队/趣点特工闯',
        'desc': '',
        'url': 'https://assets.naitanghuyu.com/preview/2505/yzcfd/0.0.2/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '勇者冲锋队/趣点特工闯 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '纸枪笔弹',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/234_1698977029993/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '纸枪笔弹 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '标枪大作战',
        'desc': '',
        'url': 'https://qt.szyqhd.com:6001/huochairen/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '标枪大作战 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '标枪大作战',
        'desc': '',
        'url': 'https://qt.szyqhd.com:6001/huochairen/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '标枪大作战 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '爷们要战斗',
        'desc': '',
        'url': 'https://file.gugudang.com/res/down/public/p_tuyue_3/web-mobile/lts/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '爷们要战斗 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '飞吧金枪鱼',
        'desc': '',
        'url': 'https://www.huoyin2015.com/feiyu/feiyuh5/feiyu1.2.2/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '飞吧金枪鱼 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小怪兽迷你枪战',
        'desc': '',
        'url': 'https://ztyxyx.tanyu.mobi/cxwl/Gun666_masterman/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小怪兽迷你枪战 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '枪组大师',
        'desc': '',
        'url': 'https://self-data-1256706884.cos.ap-chengdu.myqcloud.com/stickmantd/tdstickman_0417/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '枪组大师 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '生化地下城/顶级枪王',
        'desc': '',
        'url': 'https://file.gugudang.com/res/down/public/p_tanqiubattle/web-mobile/lts/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '生化地下城/顶级枪王 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '枪王大冒险/抢滩登陆HD/登陆计划/疯狂闯关/疯狂闯100关/枪战王者/枪战之王/枪王战争',
        'desc': '',
        'url': 'https://file.gugudang.com/res/down/public/p_xxqs/web_qwdmx/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '枪王大冒险/抢滩登陆HD/登陆计划/疯狂闯关/疯狂闯100关/枪战王者/枪战之王/枪王战争 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '丧尸来袭/打到100关（战斗）',
        'desc': '',
        'url': 'https://res.wqop2018.com/partner/shzl/tt_jslb/maoyumeng/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '丧尸来袭/打到100关（战斗） 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '拆迁特工队/合了个兵 /挤挤挤公交/魔幻粒子/魔幻蜘蛛/末世特攻队/神秘精灵屋/拥挤车站/拥挤团战/颜色大作战/养鱼大亨/战车出击（炸弹进化/毒液人快跑/开个牧场/蛇蛇快点跑/超级大餐厅/酒店大亨/我爱消一消/黑洞入侵/除草大师/大胃王英雄/一棍打天下/主播大亨/我最爱解压 新版本瑞士卷 /我最爱解压-旧版本链接/皇家守卫军/天才神射手 /疯狂黑洞/超级大餐厅新新版本链接/谁是大卧底 /挑战我最强 萌宠连环消 祖玛玩法/采油小生',
        'desc': '',
        'url': 'https://si.ali.landintheair.com/gamepass.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '拆迁特工队/合了个兵 /挤挤挤公交/魔幻粒子/魔幻蜘蛛/末世特攻队/神秘精灵屋/拥挤车站/拥挤团战/颜色大作战/养鱼大亨/战车出击（炸弹进化/毒液人快跑/开个牧场/蛇蛇快点跑/超级大餐厅/酒店大亨/我爱消一消/黑洞入侵/除草大师/大胃王英雄/一棍打天下/主播大亨/我最爱解压 新版本瑞士卷 /我最爱解压-旧版本链接/皇家守卫军/天才神射手 /疯狂黑洞/超级大餐厅新新版本链接/谁是大卧底 /挑战我最强 萌宠连环消 祖玛玩法/采油小生 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '顶级特工说明文档',
        'desc': '',
        'url': 'https://w5faz00ggc.feishu.cn/docx/Rfx6d8OwxoTfRqx7ncOcUXO6nIf',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '顶级特工说明文档 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '枪火之地/超多武器格斗',
        'desc': '',
        'url': 'https://volccdn.yuanzililiang.cn/slimeTank/1.1.2/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '枪火之地/超多武器格斗 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '枪手冲冲冲',
        'desc': '',
        'url': 'https://res.wqop2018.com/partner/whzy/qsccc/Builds/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '枪手冲冲冲 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '全自动无广链接（进入后不进行操作5秒，触发自动操作，自动抽卡，结账，战斗，自动补货）',
        'desc': '',
        'url': 'https://cos.umgame.cn/minigame_preview/10909/h5autoall/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '全自动无广链接（进入后不进行操作5秒，触发自动操作，自动抽卡，结账，战斗，自动补货） 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '王的战斗',
        'desc': '',
        'url': 'https://www.starseasoft.com/circle_battle/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '王的战斗 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '子弹先生狙击战场',
        'desc': '',
        'url': 'http://xcx.youletd.com/file/h5/zdxsjjzc/v102/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '子弹先生狙击战场 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '背包战斗家',
        'desc': '',
        'url': 'https://ysxxtech.com/nodeserver/eee/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '背包战斗家 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '垂直火力/女神降临我家',
        'desc': '',
        'url': 'https://goddess.darknight.games/assets/web20250422/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '垂直火力/女神降临我家 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我火力全开/这关真的很难',
        'desc': '',
        'url': 'https://renyounew.renyouwangluo.cn/remoteGame/jgncl3_web_12_4/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我火力全开/这关真的很难 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小丑竟是我自己（战斗）',
        'desc': '',
        'url': 'https://spwinner.cdn.xiaojing.work/ji_zhan_tu_wei/frame.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小丑竟是我自己（战斗） 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '合成我最强/防守射击',
        'desc': '',
        'url': 'https://h5.xiaoyouxi.co/supplyrush/h5/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '合成我最强/防守射击 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '合成枪神/合了个兵',
        'desc': '',
        'url': 'https://si.ali.landintheair.com/gamepass.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '合成枪神/合了个兵 动作射击 射击狙击',
        'highlight': false,
        'recommended': false
      }
    ],
    '割草生存': [
      {
        'title': '焦土战线/就问还有谁/末日狂城',
        'desc': '',
        'url': 'http://jzjgame.greatgood666.com/0613/jtzx_web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '焦土战线/就问还有谁/末日狂城 动作射击 割草生存',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '转刀割草我最强/转刀大侠传/转刀我赢定了/转刀大佬/合成飞刀转/疯狂飞刀传',
        'desc': '',
        'url': 'http://obsview.zywxgames.com/new-resources/Users/Fan/Wzr/web/zddltt/3/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '转刀割草我最强/转刀大侠传/转刀我赢定了/转刀大佬/合成飞刀转/疯狂飞刀传 动作射击 割草生存',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '末日特工队/养成大作战/割草无双',
        'desc': '',
        'url': 'https://static-cdn.zhouhy.net/h5/project/qingdu/web/moritegong/1/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '末日特工队/养成大作战/割草无双 动作射击 割草生存',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '雷电割草',
        'desc': '',
        'url': 'https://renyousome.renyouwangluo.cn/remoteGame/leidian_dr_plus/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '雷电割草 动作射击 割草生存',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '了不起的僵尸',
        'desc': '',
        'url': 'https://static-cdn.51haodong.com/oppo/catchghost-oppo/100/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '了不起的僵尸 动作射击 割草生存',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '割草吃鸡大乱斗',
        'desc': '',
        'url': 'https://cdn17.tomato123.cn/mjGccjdld/web/102/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '割草吃鸡大乱斗 动作射击 割草生存',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '秒射僵尸',
        'desc': '',
        'url': 'https://static-cdn.zhouhy.net/h5/project/qingdu/web/plants/2/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '秒射僵尸 动作射击 割草生存',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '植物大战僵尸2冒险',
        'desc': '',
        'url': 'http://106.52.38.210:800/duel2022/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '植物大战僵尸2冒险 动作射击 割草生存',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '僵尸榨汁达人',
        'desc': '',
        'url': 'https://qtweb.qtjoy.com/games/ZombieJuicing/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '僵尸榨汁达人 动作射击 割草生存',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '僵尸公路',
        'desc': '',
        'url': 'https://file.gugudang.com/res/down/public/p_hegedacheche/web-mobile/lts/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '僵尸公路 动作射击 割草生存',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '僵尸公路',
        'desc': '',
        'url': 'https://file.gugudang.com/res/down/public/p_hegedacheche/web-mobile/lts/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '僵尸公路 动作射击 割草生存',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '割草魔塔地下城',
        'desc': '',
        'url': 'https://cdn.198434.com/cli/H5/g0420/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '割草魔塔地下城 动作射击 割草生存',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '僵尸亮了/热辣拳馆',
        'desc': '',
        'url': 'https://file.gugudang.com/res/down/public/p_kapibala/web-mobile/jiangshiliangle/web_all.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '僵尸亮了/热辣拳馆 动作射击 割草生存',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '僵尸突围战',
        'desc': '',
        'url': 'https://tos.qwpo2018.com/mp/game/web/gm/031d6e12fdb02041eb8533bfeb82044c/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '僵尸突围战 动作射击 割草生存',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '僵尸别想跑',
        'desc': '',
        'url': 'http://littlegame.tomato123.cn/jsdll/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '僵尸别想跑 动作射击 割草生存',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '割草对决/背包自走棋',
        'desc': '',
        'url': 'http://h5.xiaoyouxi.co/bagchess/h5/2502191822/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '割草对决/背包自走棋 动作射击 割草生存',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '花花僵尸',
        'desc': '',
        'url': 'https://game.vsane.com/live/flowerzombiemanu/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '花花僵尸 动作射击 割草生存',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '割草对决/最强幸存者',
        'desc': '',
        'url': 'https://h5.xiaoyouxi.co/goofighter/h5/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '割草对决/最强幸存者 动作射击 割草生存',
        'highlight': false,
        'recommended': false
      }
    ]
  },
  '文字游戏': {
    '找茬解谜': [
      {
        'title': '找茬眼力王',
        'desc': '',
        'url': 'https://cdngame.shuling.vip/BianJuDaShi/ZhaoChaYanLiWang/h5/web-mobile/index.html?1.0.31',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '找茬眼力王 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '找茬大湿怀旧版/文字玩出花/找茬小王者',
        'desc': '',
        'url': 'https://cdngame.shuling.vip/BianJuDaShi/NewZhaoChaDaShi/h5/web-mobile/index.html?V1.1.35',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '找茬大湿怀旧版/文字玩出花/找茬小王者 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '找茬小天才',
        'desc': '',
        'url': 'https://sx.pasq.com/tya.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '找茬小天才 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑洞哪家强（找茬）/地表最强大佬（找茬）/我脑洞真大',
        'desc': '',
        'url': 'https://cjgame3cdn.chujinggamefun.com/ndnjq/web/2025050902/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑洞哪家强（找茬）/地表最强大佬（找茬）/我脑洞真大 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '找茬第一名',
        'desc': '',
        'url': 'https://yogo.yogohoho.com/ksdemo/zhaochadiyimingu82k/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '找茬第一名 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '疯狂最强找茬',
        'desc': '',
        'url': 'https://mini.ssflashgo.com/stonesh/test/huarong20250603/web-mobile/index.html?gameType=base&getPlatformType=Pc_ZhiBo',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '疯狂最强找茬 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑力找茬王',
        'desc': '',
        'url': 'https://qianzong.darknight.games/naolizhaochawang/web/0.0.3/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑力找茬王 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '文字来找茬',
        'desc': '',
        'url': 'https://short.puzzles100.com/sl/Gbjiu8',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '文字来找茬 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '文字找茬大师',
        'desc': '',
        'url': 'https://res3.haotgame.com/cu04/static/wenzizhaochadashi/web-mobile/?v=1.1.67',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '文字找茬大师 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '爆梗找茬王',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/myDog/findFaultKing/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '爆梗找茬王 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超级找茬不合理',
        'desc': '',
        'url': 'https://res3.haotgame.com/cu04/static/chaojizhaochabuheli/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超级找茬不合理 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '最强脑洞解谜',
        'desc': '',
        'url': 'https://res3.haotgame.com/cu04/static/zuiqiangnaodongjiemi/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '最强脑洞解谜 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '剧情找找茬',
        'desc': '',
        'url': 'https://www.lekonghd.cn/jqzzc/2.1.0/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '剧情找找茬 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超级找茬大师',
        'desc': '',
        'url': 'https://res3.haotgame.com/cu04/static/chaojizhaochadashi/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超级找茬大师 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '找茬黄金瞳',
        'desc': '',
        'url': 'https://xcx-cdn-bsy.tongchuanggame.com/goldeneyes/web-mobile/index.html?_v=1.0.5',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '找茬黄金瞳 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '开心来找茬',
        'desc': '',
        'url': 'https://game.niudu.com/drlj/kxlzc/web/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '开心来找茬 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑洞解谜王',
        'desc': '',
        'url': 'https://oss-game-res1.obs.cn-east-3.myhuaweicloud.com/youyou/wuguanglianjie/ndjmw/web-mobile/index.html?AccessKeyId=HBLOSMDEAUNYPH0MZO5T&Expires=1712126664&Signature=pBQWIzrtCuIb5NLn3ozoDtl1B8g%3D',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑洞解谜王 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '找茬靠脑洞',
        'desc': '',
        'url': 'https://res.sjzgxwl.com/pingce/xinzhaocha/tt/web_14/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '找茬靠脑洞 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑力找茬王',
        'desc': '',
        'url': 'https://qianzong.darknight.games/naolizhaochawang/web/0.0.3/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑力找茬王 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '玩梗找茬王',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/hzwz/wgzcwh5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '玩梗找茬王 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '解谜找茬',
        'desc': '',
        'url': 'https://res5.haotgame.com/cu04/static/jiemizhaochady/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '解谜找茬 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '找茬乐园',
        'desc': '',
        'url': 'https://cdn-corp-backup.cygame666.cn/brainHole/client/web/web-mobile15/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '找茬乐园 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '萌探探找茬',
        'desc': '',
        'url': 'https://youzhiqing.darknight.games/web/version154/web1/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '萌探探找茬 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑洞找茬王者',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/brainfindking/h5-2/index.html?v=1',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑洞找茬王者 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑力找茬王/叫我找茬大师',
        'desc': '',
        'url': 'https://qianzong.darknight.games/naolizhaochawang/web/0.0.3/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑力找茬王/叫我找茬大师 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '烧脑找茬王',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/hzwz2/snzcw/nh5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '烧脑找茬王 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '80找茬大师',
        'desc': '',
        'url': 'https://res5.haotgame.com/cu04/static/80zhaochadashi/web-mobile1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '80找茬大师 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '找茬当家',
        'desc': '',
        'url': 'https://yogo.yogohoho.com/ksdemo/zhaochadangjia/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '找茬当家 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '秀儿来找茬',
        'desc': '',
        'url': 'https://xiaoyouxi.tyoufun.com/game169/xezb/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '秀儿来找茬 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '玩梗我在行/玩梗与找茬',
        'desc': '',
        'url': 'https://xiaoyouxi.tyoufun.com/game169/zbwgwzh/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '玩梗我在行/玩梗与找茬 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '找茬状元',
        'desc': '',
        'url': 'https://mini.ssflashgo.com/stonesh/hanzizhaochawang_change/web/web6/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '找茬状元 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '找茬大师傅',
        'desc': '',
        'url': 'https://cdn-corp-backup.cygame666.cn/brainHole/client/web/web-mobile17/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '找茬大师傅 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '烧脑找找茬',
        'desc': '',
        'url': 'https://aliyun.umgame.cn/minigame_remote/minigame/client/medley/main/remote/web/web-desktopAuto/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '烧脑找找茬 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '找茬乐园',
        'desc': '',
        'url': 'https://cdn-corp-backup.cygame666.cn/brainHole/client/web/web-mobile15/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '找茬乐园 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '梦想找茬王',
        'desc': '',
        'url': 'http://cm.darknight.games/mxzcw/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '梦想找茬王 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '找茬王驾到',
        'desc': '',
        'url': 'http://res.ddwgame.com/prod/wgurl/web-mobile0516/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '找茬王驾到 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '玩梗与找茬',
        'desc': '',
        'url': 'https://youxipic.88090.com/wgyzc/zbzc/index.html?_refluxos=a10',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '玩梗与找茬 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '80怀旧版找茬/哪里不对劲',
        'desc': '',
        'url': 'https://packages.tobetopone.com/webGame/nlbdj_zc/?hide_nav_bar=0&hide_nav_bar=0',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '80怀旧版找茬/哪里不对劲 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '无敌找茬王者',
        'desc': '',
        'url': 'https://static.puzzles100.com/releases/game_1/g1-1003-508-1/webN_v4/web-mobile-DT_250530_144403_315/index250530_144403_315.6.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '无敌找茬王者 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '高能梗王/婆媳找茬',
        'desc': '',
        'url': 'https://qianzong.darknight.games/gaonenggengwang/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '高能梗王/婆媳找茬 文字游戏 找茬解谜',
        'highlight': false,
        'recommended': false
      }
    ],
    '汉字梗图': [
      {
        'title': '消不消嘛/打螺丝3D/脑洞解压馆/最强拆卸手',
        'desc': '',
        'url': 'https://cdn.game.chot.cn/resource/chot/xbxm_cm/0213/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消不消嘛/打螺丝3D/脑洞解压馆/最强拆卸手 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '全民爆梗王',
        'desc': '',
        'url': 'https://static.puzzles100.com/releases/game_1/g1-1003-508-1/webN_v4/web-mobile-DT_250604_095002_624/index250604_095002_624.4.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '全民爆梗王 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑洞真会玩',
        'desc': '',
        'url': 'https://www.szhaicao.com/ndzhw/live/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑洞真会玩 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑洞大侠（堆沙子）',
        'desc': '',
        'url': 'https://h5.xiaoyouxi.co/sandcastle/h5/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑洞大侠（堆沙子） 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑洞大侠（瓶子）',
        'desc': '',
        'url': 'https://cdn-corp.cygame666.cn/WaterWaterWater/web/web-mobile6/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑洞大侠（瓶子） 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '汉字十八变',
        'desc': '',
        'url': 'https://spwinner.cdn.xiaojing.work/FontTransWX/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '汉字十八变 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '爆梗大侦探',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/bgdzt/h5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '爆梗大侦探 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '疯狂爆梗王',
        'desc': '',
        'url': 'https://maoyumeng.cdn.xiaojing.work/chdl/fkbgw/web/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '疯狂爆梗王 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '文字大玩家',
        'desc': '',
        'url': 'https://play.qwplay.cn/zstext/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '文字大玩家 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '玩梗了解一下',
        'desc': '',
        'url': 'https://qcdn.bdoggame.com/ttgame/jokepartyWeb/webVer/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '玩梗了解一下 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '神奇的文字',
        'desc': '',
        'url': 'http://ld.tobetopone.com/webGame/sqdwz/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '神奇的文字 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '奇葩汉字王',
        'desc': '',
        'url': 'https://mini.ssflashgo.com/wt62/qpwzw/web/2024050701/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '奇葩汉字王 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '非常脑洞',
        'desc': '',
        'url': 'https://h5.wugua.com.cn/project_a_1/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '非常脑洞 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '梗王之王',
        'desc': '',
        'url': 'https://res.hzyougeng.com/webres/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '梗王之王 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑洞大师傅',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/28004/new-web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑洞大师傅 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '文字大玩家',
        'desc': '',
        'url': 'https://play.qwplay.cn/zstext/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '文字大玩家 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '汉字大王',
        'desc': '',
        'url': 'https://web-project.feigo.fun/douyin-hzdw/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '汉字大王 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '热梗大爆炸',
        'desc': '',
        'url': 'https://gametos.keepmobi.com/web-games/re-geng-da-bao-zha/1.0.30/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '热梗大爆炸 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑洞人爱收纳',
        'desc': '',
        'url': 'https://maoyumeng.cdn.xiaojing.work/chdl/cydmx/web/web-mobile1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑洞人爱收纳 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我玩梗贼6',
        'desc': '',
        'url': 'https://fkwg.xyx.mmhygame.com/wwgz6/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我玩梗贼6 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '文字入侵',
        'desc': '',
        'url': 'https://renyounew.renyouwangluo.cn/remoteGame/lyf_test_wz_0711/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '文字入侵 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '谁是爆梗王',
        'desc': '',
        'url': 'https://mini.ssflashgo.com/wt62/ssbgw/web/2023121502/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '谁是爆梗王 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '典籍里的文字',
        'desc': '',
        'url': 'https://oss.tobetopone.com/h5/magical_word/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '典籍里的文字 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '西游梗传',
        'desc': '',
        'url': 'http://littlegame.tomato123.cn/xiyou/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '西游梗传 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '文字大脑洞',
        'desc': '',
        'url': 'https://game-static.heicheng51.com/gm/wzdnd/web-mobile/index.html?v=1.0.1',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '文字大脑洞 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '文字成精了',
        'desc': '',
        'url': 'https://zszt-azu-cdn.chuanglinggame.com/downRes/wzcj/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '文字成精了 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '疯狂来玩梗',
        'desc': '',
        'url': 'https://fkwg.xyx.mmhygame.com/zhiSe/web_fkdtz/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '疯狂来玩梗 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '文字的信仰',
        'desc': '',
        'url': 'https://renyounew.renyouwangluo.cn/remoteGame/newWzdxyTT0104/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '文字的信仰 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '文字逃脱',
        'desc': '',
        'url': 'https://sghhh.99aly.com/5agamewx/alywx/sghhh/wx/wordEscape/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '文字逃脱 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '我玩汉字贼6',
        'desc': '',
        'url': 'http://hcstatic.game.jingyougz.com/test/v32/web-mobile/index.html?v1.0.3222222',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '我玩汉字贼6 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '汉字世界',
        'desc': '',
        'url': 'https://mini.ssflashgo.com/wt62/hzsj/web/2023122903/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '汉字世界 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑洞天花板',
        'desc': '',
        'url': 'https://cdngame.shuling.vip/BianJuDaShi/NaoDongTianHuaBan/h5/web-mobile/index.html?1.0.11.1',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑洞天花板 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑洞大师傅',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/28004/new-web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑洞大师傅 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '文字脑洞王',
        'desc': '',
        'url': 'https://short.puzzles100.com/sl/jZ17pz',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '文字脑洞王 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑洞热梗王',
        'desc': '',
        'url': 'https://www.juhaokan.net/web-qy/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑洞热梗王 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '爆笑汉字',
        'desc': '',
        'url': 'https://mini.ssflashgo.com/wt63/GuHuazhaocha/web/version465/web1/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '爆笑汉字 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑洞汉字王',
        'desc': '',
        'url': 'https://cdn-corp.cygame666.cn/brainHole/client/web/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑洞汉字王 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '文字大状元',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/noadgame/ChineseNumberOne/20240129b/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '文字大状元 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '汉字热梗王',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/noadgame/wordGeng/20240124/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '汉字热梗王 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '玩梗江湖',
        'desc': '',
        'url': 'https://qcdn.bdoggame.com/ttgame/jokepartyWeb/webVer/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '玩梗江湖 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '爆梗我最强',
        'desc': '',
        'url': 'https://maoyumeng.club/bgwzq/web/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '爆梗我最强 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '就你会玩文字',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/28009/darenshownew/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '就你会玩文字 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '汉字魔法',
        'desc': '',
        'url': 'https://www.appsprite.com/magicword/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '汉字魔法 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '文字大合集',
        'desc': '',
        'url': 'https://game-static.heicheng51.com/gm/wenzidaheji/web-mobile/index.html?v=1703052872808',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '文字大合集 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑洞攻坚战',
        'desc': '',
        'url': 'https://cpgame-1259238728.file.myqcloud.com/brainCaveBattle/NDGJZ/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑洞攻坚战 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑洞冒险家',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/28016/web/1.0.1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑洞冒险家 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '就你会玩文字',
        'desc': '',
        'url': 'https://z10.tanyu.mobi/tanpaixyx/28009/darenshow/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '就你会玩文字 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '梗传达人',
        'desc': '',
        'url': 'http://112.74.33.201:8080/geng/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '梗传达人 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑洞猜猜猜',
        'desc': '',
        'url': 'https://mini.ssflashgo.com/wt70/newhanzi/web/?gameid=ndccc',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑洞猜猜猜 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '不思议的脑洞',
        'desc': '',
        'url': 'https://minigame.qizheplay.com/bsydnd/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '不思议的脑洞 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '汉字魔术',
        'desc': '',
        'url': 'https://mini.ssflashgo.com/wt74/wqxbd/web/hanzi/34/0/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '汉字魔术 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '汉字达人',
        'desc': '',
        'url': 'https://game.csquyou.com/HanziVertical11/kol.html?v=1.12.19',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '汉字达人 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '汉字大招版',
        'desc': '',
        'url': 'https://game.csquyou.com/HanziVertical11/dazhao_live.html?v=1.0.0',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '汉字大招版 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '文字王者',
        'desc': '',
        'url': 'https://changshazhise01-1254961065.cos.ap-guangzhou.myqcloud.com/cp/tt_wzwz/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '文字王者 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '汉字小秀才',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/noadgame/HanZhiXiaoXiuCai/20240305/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '汉字小秀才 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '姐脑洞大大',
        'desc': '',
        'url': 'http://yy.xdpvp.com/jnddd_dr/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '姐脑洞大大 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '离谱的经历（文字版）',
        'desc': '',
        'url': 'https://mayahudong-1253544343.cos.ap-shanghai.myqcloud.com/cdn/lpdjl/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '离谱的经历（文字版） 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑洞解压馆',
        'desc': '',
        'url': 'https://mini-remote.miiida.com/h5/hungry-goose/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑洞解压馆 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '超级爆梗王',
        'desc': '',
        'url': 'https://cdn.hnfxhy.cn/game/ChaoJiBaoGengWang/Web/Debug/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '超级爆梗王 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑洞大开3D',
        'desc': '',
        'url': 'https://file.gugudang.com/res/down/public/p_roomsort/web-mobile/lts2/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑洞大开3D 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '玩梗老司机',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/hzwz2/wglsj2/h5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '玩梗老司机 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑洞剧本王（进入会黑屏10-15秒耐心等待即可）',
        'desc': '',
        'url': 'https://minigame.qizheplay.com/web/ndjbw/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑洞剧本王（进入会黑屏10-15秒耐心等待即可） 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑力爆梗王',
        'desc': '',
        'url': 'https://mini.ssflashgo.com/stonesh/wll/nlbgw/web/032/web-mobile/?platformType=Pc_ZhiBo&time=1727697403015',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑力爆梗王 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '文字无双',
        'desc': '',
        'url': 'https://zzxygame.com/hzws/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '文字无双 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '神脑洞',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/justeliminateit/snd/h5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '神脑洞 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑洞天才',
        'desc': '',
        'url': 'https://short.puzzles100.com/sl/EzzVx1',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑洞天才 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '文字大玩家/奇妙的汉字',
        'desc': '',
        'url': 'https://play.qwplay.cn/zstext/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '文字大玩家/奇妙的汉字 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '全民梗王',
        'desc': '',
        'url': 'https://cdn.qugukeji.com/Game/QuanMinGengWang/Web/Debug/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '全民梗王 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '无敌脑洞',
        'desc': '',
        'url': 'https://res.wqop2018.com/zhise/wdnd/web_dgdbf/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '无敌脑洞 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '文字大风暴',
        'desc': '',
        'url': 'https://update-smallgame.huanyz.com/X4/Version_Webgl/webgl/H5Game/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '文字大风暴 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑洞人大冒险',
        'desc': '',
        'url': 'https://maoyumeng.cdn.xiaojing.work/chdl/cydmx/web/web-mobile4/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑洞人大冒险 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '梗王侦探社',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/snzcw/otherh5/wgztsclean/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '梗王侦探社 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑洞来了',
        'desc': '',
        'url': 'https://ndllcdn.chujinggamefun.com/web/web_cmdyj/index.html?_refluxos=a10',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑洞来了 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '神奇的文字',
        'desc': '',
        'url': 'https://packages.tobetopone.com/webGame/sqdwz3/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '神奇的文字 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑洞派对',
        'desc': '',
        'url': 'https://hemengcdn.darknight.games/web/naodongpaidui/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑洞派对 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '爆梗西游',
        'desc': '',
        'url': 'https://mini.ssflashgo.com//stonesh/v-lez/HilariousJWest/web/external_link/index.html?time=1736840790949',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '爆梗西游 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑洞大破天',
        'desc': '',
        'url': 'https://dycdn-1256464321.cos.ap-guangzhou.myqcloud.com/swcf/nddpt/111/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑洞大破天 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这梗有点意思',
        'desc': '',
        'url': 'https://xiaoyouxi.tyoufun.com/game172/zbydys/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这梗有点意思 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '密室国王消除/密室国王消除逃脱/脑洞小当家',
        'desc': '',
        'url': 'https://cct.szhaicao.com/zgwhg/web/2024121405/index.html?_refluxos=a10',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '密室国王消除/密室国王消除逃脱/脑洞小当家 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '梗王脑洞大开',
        'desc': '',
        'url': 'https://abc.szyqhd.com/web/cslj/fkgw/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '梗王脑洞大开 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '小小梗王',
        'desc': '',
        'url': 'https://cdn.xmhemeng.com/xiaoxiaogengwang/webnoads/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '小小梗王 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑洞强人',
        'desc': '',
        'url': 'https://game.csquyou.com/HanziVertical11/NDQR.html?v=1.0.1',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑洞强人 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这里有梗',
        'desc': '',
        'url': 'http://brainchildhood.ifireflygame.com/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这里有梗 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '玩梗哈哈哈',
        'desc': '',
        'url': 'https://res.game.7to.cn/gameres/pgame2/wggs/wggs0325/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '玩梗哈哈哈 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑洞大能',
        'desc': '',
        'url': 'https://www.nuanyou8.cn/naodongMin/?hide_nav_bar=0&disable_cdn=1&loader_name=default&disable_auto_expose=1&enable_webview_select_search=1&need_out_animation=right&font_scale=1.0',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑洞大能 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑洞练习生',
        'desc': '',
        'url': 'https://res5.haotgame.com/cu04/static/naodonglianxishengdy_zb/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑洞练习生 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '玩梗大脑瓜',
        'desc': '',
        'url': 'https://bzres.yigomob.com/noad/BigBrainMelon/3.0.5_250423/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '玩梗大脑瓜 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '一代梗王（加载慢需要5~15秒，请耐心等待）',
        'desc': '',
        'url': 'https://cl-game-pb.chuanglinggame.com/yidaigengwang/noAd/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '一代梗王（加载慢需要5~15秒，请耐心等待） 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '趣味益智脑洞',
        'desc': '',
        'url': 'https://pub-da48fbf0a159432aa120c84bd720ac9e.r2.dev/Blots/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '趣味益智脑洞 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '绝对有梗',
        'desc': '',
        'url': 'https://www.qihuanmao.cn/JDYG/ZBAds/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '绝对有梗 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '玩梗脑洞王/玩个梗吧',
        'desc': '',
        'url': 'https://res.game.7to.cn/gameres/pgame2/wgndw/wghh0508/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '玩梗脑洞王/玩个梗吧 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '文字修真传/文字最强王者/修仙转生日志/重生之仙鱼寻道修真',
        'desc': '',
        'url': 'https://cdn-wenzixiuzhenzhuan.cygame666.cn/game041601/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '文字修真传/文字最强王者/修仙转生日志/重生之仙鱼寻道修真 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑洞哪家强（冒险闯关）',
        'desc': '',
        'url': 'https://cdn.198434.com/h5/ZuMa/zmjmm202501221814/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑洞哪家强（冒险闯关） 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '爆梗王者',
        'desc': '',
        'url': 'https://cdn.xmhemeng.com/baogengwangzhe/webnoads/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '爆梗王者 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '玩转脑洞',
        'desc': '',
        'url': 'https://qianzong.darknight.games/wanZhuanNaoDong/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '玩转脑洞 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这不是汉字闯关/叠叠消成语版本一',
        'desc': '',
        'url': 'https://tos.qwpo2018.com/mp/game/web/gm/ddxcy_26506c58017dd479a35e665d3ec5e2a2/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这不是汉字闯关/叠叠消成语版本一 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '这不是汉字闯关/叠叠消成语版本二',
        'desc': '',
        'url': 'http://tos.wqop2018.com/mp/game/web/gm/7fefb8165695e3d436a9cb1cc59a5c21/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '这不是汉字闯关/叠叠消成语版本二 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑洞实验室',
        'desc': '',
        'url': 'https://xiaoyouxi.tyoufun.com/naodongshiyanshi/h5noad/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑洞实验室 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '脑洞闯关达人',
        'desc': '',
        'url': 'https://qtweb.qtjoy.com/externalWeb/TKB/RotatingJumpBall/V0/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '脑洞闯关达人 文字游戏 汉字梗图',
        'highlight': false,
        'recommended': false
      }
    ]
  },
  '策略塔防': {
    '塔防守城': [
      {
        'title': '僵尸防御大亨/僵尸毁灭战斗',
        'desc': '',
        'url': 'https://www.zywxgames.com/xyx002/Resource/lisongfeng/Temp/jsfydh/010-nGfNe7FOrkVh6Suj/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '僵尸防御大亨/僵尸毁灭战斗 策略塔防 塔防守城',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '僵尸围城/僵尸围境/死亡崛起/旅途防线/深渊塔防',
        'desc': '',
        'url': 'https://publishing.u3d.cn/game/sswc',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '僵尸围城/僵尸围境/死亡崛起/旅途防线/深渊塔防 策略塔防 塔防守城',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '攻城略地/你行你上同类型/全军冲锋同类型/你行你上/子弹在飞/不服你来',
        'desc': '',
        'url': 'https://gamesres.ultralisk.cn/h5_games_daren/283_1745922997921/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '攻城略地/你行你上同类型/全军冲锋同类型/你行你上/子弹在飞/不服你来 策略塔防 塔防守城',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '打了个龙/条件射击/守夜防线/勇者屠恶龙/疯狂小兵/无双割草',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/bagfight-bagfightcdn/tjsj/dragonmaster/web-mobile/index.html?_t=1739257156541',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '打了个龙/条件射击/守夜防线/勇者屠恶龙/疯狂小兵/无双割草 策略塔防 塔防守城',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '生化围城',
        'desc': '',
        'url': 'http://h5.sm.deniulor.com/basedefence/daren/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '生化围城 策略塔防 塔防守城',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '僵尸生存基地',
        'desc': '',
        'url': 'https://mgcdn.sanzigame.cn/tafang/h5/zw/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '僵尸生存基地 策略塔防 塔防守城',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '守城保卫战/火锅头冒险记/王者来闯关/战争进化史',
        'desc': '',
        'url': 'https://file.gugudang.com/res/down/public/bzdld/web-mobile/lts2/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '守城保卫战/火锅头冒险记/王者来闯关/战争进化史 策略塔防 塔防守城',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '守城保卫战/火锅头冒险记/王者来闯关/战争进化史',
        'desc': '进游戏点击开始战斗屏幕中间最上方第一关三个字右边附近多点点有后台',
        'url': 'https://cdn.cdlionhead.com/minigame/Scale_the_Depths/noads/fish/Index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '守城保卫战/火锅头冒险记/王者来闯关/战争进化史 策略塔防 塔防守城',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '最强防御战',
        'desc': '',
        'url': 'https://res.cjs001.com/h5/DuskWarZ/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '最强防御战 策略塔防 塔防守城',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '最强防御战',
        'desc': '',
        'url': 'https://res.cjs001.com/h5/DuskWarZ/web/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '最强防御战 策略塔防 塔防守城',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '守卫大作战/不一样的塔防',
        'desc': '',
        'url': 'https://tos.qwpo2018.com/mp/game/web/inside/73c40a33e2151feac8cd5e33ccb5c644/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '守卫大作战/不一样的塔防 策略塔防 塔防守城',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '末日终防线',
        'desc': '',
        'url': 'http://littlegame.tomato123.cn/EndWorld/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '末日终防线 策略塔防 塔防守城',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '城堡争夺/勇者塔防',
        'desc': '',
        'url': 'https://lfrjtxx-cou.gusspro.com/app-3/Test/tds/DRGM/1.00/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '城堡争夺/勇者塔防 策略塔防 塔防守城',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '塔防游戏大师/陷阱塔防大师',
        'desc': '',
        'url': 'https://game.haiwanwl.com/trapMaster_bytedance_gm/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '塔防游戏大师/陷阱塔防大师 策略塔防 塔防守城',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '真让人头大/超能防御',
        'desc': '',
        'url': 'https://res.wqop2018.com/partner/csrq/dd100g_H5/1.0.0/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '真让人头大/超能防御 策略塔防 塔防守城',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '主公爱攻城',
        'desc': '',
        'url': 'https://demo2.9999le.com/aigongc/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '主公爱攻城 策略塔防 塔防守城',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '蜜蜜防御/密密防御',
        'desc': '',
        'url': 'https://game.vsane.com/live/honeymanu/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '蜜蜜防御/密密防御 策略塔防 塔防守城',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '僵尸生存基地',
        'desc': '',
        'url': 'https://mgcdn.sanzigame.cn/tafang/h5/zw/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '僵尸生存基地 策略塔防 塔防守城',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '星际塔防',
        'desc': '',
        'url': 'https://daren.glifegame.com/xjqsz/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '星际塔防 策略塔防 塔防守城',
        'highlight': false,
        'recommended': false
      }
    ]
  },
  '棋牌桌游': {
    '综合': [
      {
        'title': '麻将消一消',
        'desc': '',
        'url': 'http://47.108.216.45/WebGames/MJXYX/web-mobile/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '麻将消一消 棋牌桌游 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '万宁象棋大招版',
        'desc': '',
        'url': 'https://gamebm.keepmobi.com/web-games/wan-ning-xiang-qi/v20250616/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '万宁象棋大招版 棋牌桌游 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '麻了个麻将',
        'desc': '',
        'url': 'https://cdn.zhang-xian.com/cocos-mahjong-ten-match/wx-mini-game-mmtgd.qiniu.cut-grass/web-mobile-tt2/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '麻了个麻将 棋牌桌游 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '像棋不象棋',
        'desc': '',
        'url': 'https://renyounew.renyouwangluo.cn/remoteGame/xqbxqGame1.5.7_oss_xqbxq2/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '像棋不象棋 棋牌桌游 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '疯狂麻将',
        'desc': '',
        'url': 'https://static.zuiqiangyingyu.cn/wb_webview/tortoise/removemahjong/fkmjh5/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '疯狂麻将 棋牌桌游 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '消除麻将',
        'desc': '',
        'url': 'https://cdn.flysheeep.com/xuewenhong/Mahjong/wx704d4014f7568c2f/NoAdWeb/23/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '消除麻将 棋牌桌游 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '抓了个抓麻将',
        'desc': '',
        'url': 'https://spwinner.cdn.xiaojing.work/dy_zhua_le_ge_zhua/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '抓了个抓麻将 棋牌桌游 综合',
        'highlight': false,
        'recommended': false
      }
    ]
  },
  '竞速驾驶': {
    '综合': [
      {
        'title': '越野赛车极限狂飙',
        'desc': '',
        'url': 'http://xcx.youletd.com/file/h5/lsjjqkb/v103/web-mobile/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '越野赛车极限狂飙 竞速驾驶 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '卡车模拟运输',
        'desc': '',
        'url': 'https://sdk.hwengame.com/IssuerPackNew/IdleTruck_1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '卡车模拟运输 竞速驾驶 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '卡车模拟器/卡车模拟驾驶',
        'desc': '',
        'url': 'https://game2.sfplay.net/thecar',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '卡车模拟器/卡车模拟驾驶 竞速驾驶 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '极限超车说明文档',
        'desc': '',
        'url': 'https://tiny-fun.feishu.cn/docx/doxcnQkbCfqucNHpoHxPoJ3UnAf?from=from_copylink',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '极限超车说明文档 竞速驾驶 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '停车我最牛',
        'desc': '',
        'url': 'https://test.car.darknight.games/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '停车我最牛 竞速驾驶 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '停车请注意',
        'desc': '',
        'url': 'https://aaa.puffergames.com/GameServerData/CarRushChallenge/webgl_hurryuptocar_stoptocar_1213/',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '停车请注意 竞速驾驶 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '停车场大亨',
        'desc': '',
        'url': 'https://assets.tinyfun.online/game/sale/car-lot/latest/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '停车场大亨 竞速驾驶 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '老司机花式停车',
        'desc': '',
        'url': 'https://tos.qwpo2018.com/mp/game/web/gm/dedbb4b13dfcbe71c8943664dd673b24/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '老司机花式停车 竞速驾驶 综合',
        'highlight': false,
        'recommended': false
      },
      {
        'title': '全民指上赛车',
        'desc': '',
        'url': 'https://crazylabs.ali.landintheair.com/SuperCarMerge/NoAd/1.0.1/index.html',
        'logoUrl': 'https://www.douyin.com/favicon.ico',
        'keywords': '全民指上赛车 竞速驾驶 综合',
        'highlight': false,
        'recommended': false
      }
    ]
  }
};
