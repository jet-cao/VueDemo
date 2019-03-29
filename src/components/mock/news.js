import Mock from 'mockjs'

let news = function (opt) {
  if (opt.url.indexOf('guoji') > 0) {
    return {
      guoji: [
        {
          author_name: '瑶瑶无期',
          category: '国际',
          date: '2019-03-14 10:50',
          thumbnail_pic_s: 'http://01imgmini.eastday.com/mobile/20190314/2019031410_1b16993b1e5d41649865ce7d9954210d_4560_mwpm_03200403.jpg',
          thumbnail_pic_s02: 'http://01imgmini.eastday.com/mobile/20190314/2019031410_1029cce93298458f9dea8228736fe0d6_5535_mwpm_03200403.jpg',
          title: '美国女子患怪病,像男人一样‘长胡子’,苦恼找不到男朋友!',
          uniquekey: '0ec8c5665390b858860c516a5c683731',
          url: 'http://mini.eastday.com/mobile/190314105054901.html',
          __proto__: Object
        },
        {
          author_name: '海外网',
          category: '国际',
          date: '2019-03-14 10:49',
          thumbnail_pic_s: 'http://04imgmini.eastday.com/mobile/20190314/20190314104957_4bdfb6a9b4783f174737ab8c4a169665_1_mwpm_03200403.jpg',
          thumbnail_pic_s02: 'http://04imgmini.eastday.com/mobile/20190314/20190314104957_4bdfb6a9b4783f174737ab8c4a169665_2_mwpm_03200403.jpg',
          title: '多名艺人涉黄的韩国胜利门 爆出更多肮脏内容',
          uniquekey: '6ea682a2a4be440b8c7fb9748bd62b4f',
          url: 'http://mini.eastday.com/mobile/190314104957407.html',
          __proto__: Object
        },

        {
          author_name: '澎湃新闻网',
          category: '国际',
          date: '2019-03-14 10:48',
          thumbnail_pic_s: 'http://07imgmini.eastday.com/mobile/20190314/20190314104825_d03c3d90876443714099de7a6a26bd42_1_mwpm_03200403.jpg',
          title: '巴西校园枪击案已致10死：17岁枪手射杀同伙后自杀身亡',
          uniquekey: '8c1bd7063fe26177dd4d4cc6b429baa2',
          url: 'http://mini.eastday.com/mobile/190314104825496.html',
          __proto__: Object
        },

        {
          author_name: '第一个晴天123',
          category: '国际',
          date: '2019-03-14 10:47',
          thumbnail_pic_s: 'http://09imgmini.eastday.com/mobile/20190314/2019031410_84c83deb49a241f58647516cc34e9200_8683_mwpm_03200403.jpg',
          thumbnail_pic_s02: 'http://09imgmini.eastday.com/mobile/20190314/2019031410_1aa8507c8517435bbaa46ddb3a0fc991_6637_mwpm_03200403.jpg',
          thumbnail_pic_s03: 'http://09imgmini.eastday.com/mobile/20190314/2019031410_dccc11c7cbac443d885275b064f4c617_6981_mwpm_03200403.jpg',
          title: '截肢少年不向命运妥协，凭顽强意志获得街舞冠军',
          uniquekey: '562be70877a812e521a4efa76f742539',
          url: 'http://mini.eastday.com/mobile/190314104744724.html',
          __proto__: Object
        },

        {
          author_name: '第一个晴天123',
          category: '国际',
          date: '2019-03-14 10:46',
          thumbnail_pic_s: 'http://08imgmini.eastday.com/mobile/20190314/2019031410_ccf6a95cf9ea41638c1e8b021f14fe21_7884_mwpm_03200403.jpg',
          thumbnail_pic_s02: 'http://08imgmini.eastday.com/mobile/20190314/2019031410_8ef6d56c83df4898bc888e0e8c690f56_6390_mwpm_03200403.jpg',
          thumbnail_pic_s03: 'http://08imgmini.eastday.com/mobile/20190314/2019031410_5d61bd529d9b41e6a7173e18e2f6c31b_4764_mwpm_03200403.jpg',
          title: '25岁女子整容上瘾，花费26万将自己整成真人芭比',
          uniquekey: 'bcd47a36b1aac7ad07c58ec19fd27d1e',
          url: 'http://mini.eastday.com/mobile/190314104649285.html',
          __proto__: Object
        },

        {
          author_name: '中国新闻网',
          category: '国际',
          date: '2019-03-14 10:45',
          thumbnail_pic_s: 'http://09imgmini.eastday.com/mobile/20190314/20190314104546_fc30a0b5189fb8a18cf8a4b9fac6a899_1_mwpm_03200403.jpg',
          title: '荷兰法律严控毒品 中使馆呼吁中国公民自觉远离',
          uniquekey: 'cfbd0d100d82455b128ee4787c3403a5',
          url: 'http://mini.eastday.com/mobile/190314104546301.html',
          __proto__: Object
        },

        {
          author_name: '中国新闻网',
          category: '国际',
          date: '2019-03-14 10:45',
          thumbnail_pic_s: 'http://08imgmini.eastday.com/mobile/20190314/20190314104545_559ed18aa46c2e1341c3f8c08a5e59c3_1_mwpm_03200403.jpg',
          title: '美多地爆发麻疹疫情 44名未打疫苗儿童被禁止返校',
          uniquekey: 'b7649eae0ad80ac692aeeb146fb65fbf',
          url: 'http://mini.eastday.com/mobile/190314104545321.html',
          __proto__: Object
        },

        {
          author_name: '观察者网',
          category: '国际',
          date: '2019-03-14 10:44',
          thumbnail_pic_s: 'http://07imgmini.eastday.com/mobile/20190314/20190314104457_1f30cb108935d2095bc28ca9ceb6b727_1_mwpm_03200403.jpg',
          title: '特朗普忍不了，要他俩走人？',
          uniquekey: 'c0eab8beaf7bb872dc217c3df43345ec',
          url: 'http://mini.eastday.com/mobile/190314104457155.html',
          __proto__: Object
        },

        {
          author_name: '新民网',
          category: '国际',
          date: '2019-03-14 10:44',
          thumbnail_pic_s: 'http://03imgmini.eastday.com/mobile/20190314/20190314104447_6878632b9153eb0921fbc0526ff6d6e8_1_mwpm_03200403.jpg',
          title: '全球48座城市获评“最佳城市” 中国3城进入榜单',
          uniquekey: 'a1e55602db112b4a04e8a9ec8f14b9c0',
          url: 'http://mini.eastday.com/mobile/190314104447943.html',
          __proto__: Object
        },

        {
          author_name: '黄胜友',
          category: '国际',
          date: '2019-03-14 10:44',
          thumbnail_pic_s: 'http://08imgmini.eastday.com/mobile/20190314/20190314104419_811d86c8e08c6a0ba9e24e669f259a5a_8_mwpm_03200403.jpg',
          thumbnail_pic_s02: 'http://08imgmini.eastday.com/mobile/20190314/20190314104419_811d86c8e08c6a0ba9e24e669f259a5a_4_mwpm_03200403.jpg',
          thumbnail_pic_s03: 'http://08imgmini.eastday.com/mobile/20190314/20190314104419_811d86c8e08c6a0ba9e24e669f259a5a_9_mwpm_03200403.jpg',
          title: '欧盟全面停飞737MAX  国际与国内政治压力下 特朗普宣布美国禁飞',
          uniquekey: 'ac249ff0880328a13aee4778fd62ee78',
          url: 'http://mini.eastday.com/mobile/190314104419778.html',
          __proto__: Object
        },

        {
          author_name: '第一个晴天123',
          category: '国际',
          date: '2019-03-14 10:42',
          thumbnail_pic_s: 'http://08imgmini.eastday.com/mobile/20190314/2019031410_a5b248afa95242f4aab35f71fcc024cd_0021_mwpm_03200403.jpg',
          thumbnail_pic_s02: 'http://08imgmini.eastday.com/mobile/20190314/2019031410_56923aac1e2a46ab964ed560d06ca5b7_1793_mwpm_03200403.jpg',
          thumbnail_pic_s03: 'http://08imgmini.eastday.com/mobile/20190314/2019031410_427c45e81d934d4fb11eb3dec6970551_0914_mwpm_03200403.jpg',
          title: '女子用耳朵提60斤重物，曾挑战多项吉尼斯纪录',
          uniquekey: '02fcc32e3c2d0f91838c8581c86e8f93',
          url: 'http://mini.eastday.com/mobile/190314104258174.html',
          __proto__: Object
        },

        {
          author_name: '黑历史第一人',
          category: '国际',
          date: '2019-03-14 10:42',
          thumbnail_pic_s: 'http://01imgmini.eastday.com/mobile/20190314/20190314104814_32310fd0b94e839cabf96c0d8c7b514d_2_mwpm_03200403.jpg',
          thumbnail_pic_s02: 'http://01imgmini.eastday.com/mobile/20190314/20190314104814_32310fd0b94e839cabf96c0d8c7b514d_3_mwpm_03200403.jpg',
          thumbnail_pic_s03: 'http://01imgmini.eastday.com/mobile/20190314/20190314104814_32310fd0b94e839cabf96c0d8c7b514d_1_mwpm_03200403.jpg',
          title: '德国人海底捞出中国文物，3000万美元卖新加坡华人，真是一夜暴富',
          uniquekey: '4472c0d5ba66d204ef29b10fd9863aac',
          url: 'http://mini.eastday.com/mobile/190314104232131.html',
          __proto__: Object
        },

        {
          author_name: '上海热线国际',
          category: '国际',
          date: '2019-03-14 10:40',
          thumbnail_pic_s: 'http://04imgmini.eastday.com/mobile/20190314/20190314104027_a97ab7807c647ad5942d50a67f657448_4_mwpm_03200403.jpg',
          thumbnail_pic_s02: 'http://04imgmini.eastday.com/mobile/20190314/20190314104027_a97ab7807c647ad5942d50a67f657448_1_mwpm_03200403.jpg',
          thumbnail_pic_s03: 'http://04imgmini.eastday.com/mobile/20190314/20190314104027_a97ab7807c647ad5942d50a67f657448_2_mwpm_03200403.jpg',
          title: '埃塞航空难真相越来越清楚，这4个漏洞，波音完败空客',
          uniquekey: 'aeb73f219d0d3609d3f5d4964c98fae1',
          url: 'http://mini.eastday.com/mobile/190314104027832.html',
          __proto__: Object
        }
      ]
    }
  } else if (opt.url.indexOf('tiyu') > 0) {
    return {
      tiyu: [

        {
          author_name: '爱羽客羽毛球网',
          category: '体育',
          date: '2019-03-14 15:20',
          thumbnail_pic_s: 'http://02imgmini.eastday.com/mobile/20190314/20190314152006_bd0963e50d468ec5d8f1d48559c22ce1_1_mwpm_03200403.jpg',
          title: '全英赛亚军苏伟译/谢定峰，今年目标一冠',
          uniquekey: 'ed895089e8236bdb9dda73180699571f',
          url: 'http://mini.eastday.com/mobile/190314152006215.html',
          __proto__: Object
        },

        {
          author_name: '头条APP',
          category: '体育',
          date: '2019-03-14 15:19',
          thumbnail_pic_s: 'http://08imgmini.eastday.com/mobile/20190314/20190314151907_48f71d70bc12e81b16cacfdf268af3b6_1_mwpm_03200403.jpg',
          title: '利物浦晋级欧冠8强 本赛季欧冠8强全部产生,英超独占4席',
          uniquekey: '7fdbd658f0ec058e747f5a257a13ed8d',
          url: 'http://mini.eastday.com/mobile/190314151907001.html',
          __proto__: Object
        },

        {
          author_name: '肆客足球',
          category: '体育',
          date: '2019-03-14 15:17',
          thumbnail_pic_s: 'http://04imgmini.eastday.com/mobile/20190314/20190314151742_e430b428f53c293152853e567103bb4f_3_mwpm_03200403.jpg',
          thumbnail_pic_s02: 'http://04imgmini.eastday.com/mobile/20190314/20190314151742_e430b428f53c293152853e567103bb4f_9_mwpm_03200403.jpg',
          thumbnail_pic_s03: 'http://04imgmini.eastday.com/mobile/20190314/20190314151742_e430b428f53c293152853e567103bb4f_4_mwpm_03200403.jpg',
          title: '孤立无援的莱万，验证了拜仁实力和战术的完败',
          uniquekey: '75565b956a8249a911d43874879dadb9',
          url: 'http://mini.eastday.com/mobile/190314151742254.html',
          __proto__: Object
        },

        {
          author_name: '虎扑体育',
          category: '体育',
          date: '2019-03-14 15:15',
          thumbnail_pic_s: 'http://00imgmini.eastday.com/mobile/20190314/20190314151558_3fa9c5e3d4b24d52150022dbc85d38d0_1_mwpm_03200403.jpg',
          title: '葡媒：租借合同到期后，古德利将离开葡萄牙体育',
          uniquekey: '16e0aaab32a19a0755da65a88979c3d1',
          url: 'http://mini.eastday.com/mobile/190314151558940.html',
          __proto__: Object
        },

        {
          author_name: '懒熊体育',
          category: '体育',
          date: '2019-03-14 15:15',
          thumbnail_pic_s: 'http://04imgmini.eastday.com/mobile/20190314/20190314151551_3ec612de3bea103739942ae1b96e2544_1_mwpm_03200403.jpg',
          thumbnail_pic_s02: 'http://04imgmini.eastday.com/mobile/20190314/20190314151551_3ec612de3bea103739942ae1b96e2544_2_mwpm_03200403.jpg',
          title: '韦德路威们在 NBA 青史留名的背后，是正在崛起的国货',
          uniquekey: '537dc6025e8978bd1162e63b31e11ea8',
          url: 'http://mini.eastday.com/mobile/190314151551752.html',
          __proto__: Object
        },
        {
          author_name: '聊球聊运动',
          category: '体育',
          date: '2019-03-14 15:15',
          thumbnail_pic_s: 'http://05imgmini.eastday.com/mobile/20190314/20190314151550_7aa5f810181c5e61c982513087573a90_3_mwpm_03200403.jpg',
          thumbnail_pic_s02: 'http://05imgmini.eastday.com/mobile/20190314/20190314151550_7aa5f810181c5e61c982513087573a90_5_mwpm_03200403.jpg',
          thumbnail_pic_s03: 'http://05imgmini.eastday.com/mobile/20190314/20190314151550_7aa5f810181c5e61c982513087573a90_4_mwpm_03200403.jpg',
          title: '谦逊！梅西欧冠2传2射赞C罗：马竞很强大，C罗表现令人敬畏',
          uniquekey: '585a04cddfa080672b182da66bdb3735',
          url: 'http://mini.eastday.com/mobile/190314151550321.html',
          __proto__: Object
        },

        {
          author_name: '摔角网',
          category: '体育',
          date: '2019-03-14 15:15',
          thumbnail_pic_s: 'http://09imgmini.eastday.com/mobile/20190314/20190314151539_b63c09e518da3c40383620f37f54d388_1_mwpm_03200403.jpg',
          title: '厉害了！黑羊将顶替迪安，加入圣盾组合！',
          uniquekey: '020e97142bff65f3c2295ac915a61f74',
          url: 'http://mini.eastday.com/mobile/190314151539247.html',
          __proto__: Object
        },

        {
          author_name: '农村小伙忆曼巴',
          category: '体育',
          date: '2019-03-14 15:15',
          thumbnail_pic_s: 'http://02imgmini.eastday.com/mobile/20190314/2019031415_a0369661f9ce40c48d8e991d2839aed3_7867_cover_mwpm_03200403.jpg',
          thumbnail_pic_s02: 'http://02imgmini.eastday.com/mobile/20190314/2019031415_e591f7aba5a8467ea7a375c47bfe80ed_7647_cover_mwpm_03200403.jpg',
          thumbnail_pic_s03: 'http://02imgmini.eastday.com/mobile/20190314/2019031415_2d8c62dacdef4021b9e6fcad8db1c822_4594_cover_mwpm_03200403.jpg',
          title: '囧，考辛斯突破分球给场下库里，新秀偷笑，看到考神摊手笑容消失',
          uniquekey: '875eb9e8a85613c70e8f913935dbec14',
          url: 'http://mini.eastday.com/mobile/190314151512050.html',
          __proto__: Object
        },

        {
          author_name: '北方的河',
          category: '体育',
          date: '2019-03-14 15:14',
          thumbnail_pic_s: 'http://07imgmini.eastday.com/mobile/20190314/20190314151428_fdeeb9814bc7fe3336f51e1e458ec374_1_mwpm_03200403.jpg',
          thumbnail_pic_s02: 'http://07imgmini.eastday.com/mobile/20190314/20190314151428_fdeeb9814bc7fe3336f51e1e458ec374_2_mwpm_03200403.jpg',
          thumbnail_pic_s03: 'http://07imgmini.eastday.com/mobile/20190314/20190314151428_fdeeb9814bc7fe3336f51e1e458ec374_3_mwpm_03200403.jpg',
          title: '倒提学员入水练习，苏联时代的女教练，不服不行',
          uniquekey: '1effbe722a66255360cbc8b8aaa5e9a1',
          url: 'http://mini.eastday.com/mobile/190314151428442.html',
          __proto__: Object
        },
        {
          author_name: '小陆说球',
          category: '体育',
          date: '2019-03-14 15:14',
          thumbnail_pic_s: 'http://05imgmini.eastday.com/mobile/20190314/20190314151413_75f3b16e25eafd880b8d8e7294ebabe8_5_mwpm_03200403.jpg',
          thumbnail_pic_s02: 'http://05imgmini.eastday.com/mobile/20190314/20190314151413_75f3b16e25eafd880b8d8e7294ebabe8_2_mwpm_03200403.jpg',
          thumbnail_pic_s03: 'http://05imgmini.eastday.com/mobile/20190314/20190314151413_75f3b16e25eafd880b8d8e7294ebabe8_4_mwpm_03200403.jpg',
          title: '赛季至今，东契奇共命中152记三分，那特雷杨、巴格利和艾顿呢？',
          uniquekey: '67e2a692259c63cb3a5b2a0d61ed0f69',
          url: 'http://mini.eastday.com/mobile/190314151413293.html',
          __proto__: Object
        },
        {
          author_name: '龙虎风云榜',
          category: '体育',
          date: '2019-03-14 15:14',
          thumbnail_pic_s: 'http://01imgmini.eastday.com/mobile/20190314/20190314151409_7330b18c7a223a1861b1cae35eeca405_2_mwpm_03200403.jpg',
          thumbnail_pic_s02: 'http://01imgmini.eastday.com/mobile/20190314/20190314151409_7330b18c7a223a1861b1cae35eeca405_1_mwpm_03200403.jpg',
          thumbnail_pic_s03: 'http://01imgmini.eastday.com/mobile/20190314/20190314151409_7330b18c7a223a1861b1cae35eeca405_3_mwpm_03200403.jpg',
          title: '关键时刻没有搏杀勇气，保守的佩雷拉很难带领上港在亚冠有所突破',
          uniquekey: '65603f9832bcbeda26549f82f34353be',
          url: 'http://mini.eastday.com/mobile/190314151409410.html',
          __proto__: Object
        },
        {
          author_name: '那么乖巧的丽思',
          category: '体育',
          date: '2019-03-14 15:14',
          thumbnail_pic_s: 'http://06imgmini.eastday.com/mobile/20190314/20190314151401_488bb08e17e6d3c984c6ca61f6705729_1_mwpm_03200403.jpg',
          title: '对手又被梅西打服:历史最佳 阻止他是不可能的',
          uniquekey: '807614e521cd051bd52de2f2e037f116',
          url: 'http://mini.eastday.com/mobile/190314151401756.html',
          __proto__: Object
        },
        {
          author_name: '圆月弯刀go',
          category: '体育',
          date: '2019-03-14 15:13',
          thumbnail_pic_s: 'http://05imgmini.eastday.com/mobile/20190314/20190314151357_df9ed8729fa71abfa8617aeb5d1d4fb7_2_mwpm_03200403.jpg',
          thumbnail_pic_s02: 'http://05imgmini.eastday.com/mobile/20190314/20190314151357_df9ed8729fa71abfa8617aeb5d1d4fb7_1_mwpm_03200403.jpg',
          thumbnail_pic_s03: 'http://05imgmini.eastday.com/mobile/20190314/20190314151357_df9ed8729fa71abfa8617aeb5d1d4fb7_3_mwpm_03200403.jpg',
          title: '火箭负勇士迎坏消息，这队胜篮网完成反超！最新排行：爵士升第7',
          uniquekey: '10744f19d1f16034569e288d0d9660f1',
          url: 'http://mini.eastday.com/mobile/190314151357291.html',
          __proto__: Object
        }
      ]
    }
  } else if (opt.url.indexOf('yule') > 0) {
    return {
      yule: [
        {
          author_name: '成功逐鹿',
          category: '娱乐',
          date: '2019-03-14 15:44',
          thumbnail_pic_s: 'http://05imgmini.eastday.com/mobile/20190314/2019031415_89e35f9d95c34be3b75de32d2673805b_3850_mwpm_03200403.jpg',
          thumbnail_pic_s02: 'http://05imgmini.eastday.com/mobile/20190314/2019031415_038af19154d1449f83329268eb305bf7_2668_mwpm_03200403.jpg',
          thumbnail_pic_s03: 'http://05imgmini.eastday.com/mobile/20190314/2019031415_5824f73377e84666b723449f6be53356_3940_mwpm_03200403.jpg',
          title: '曾经得过抑郁症的明星，有的人最后结果也是引起了轰动！',
          uniquekey: 'b1fc0f555b19c48b84c77f80d22de79f',
          url: 'http://mini.eastday.com/mobile/190314154427384.html',
          __proto__: Object
        },
        {
          author_name: '花边明星',
          category: '娱乐',
          date: '2019-03-14 15:44',
          thumbnail_pic_s: 'http://03imgmini.eastday.com/mobile/20190314/20190314154418_e4ea1958741e207be4a471367b35dbf9_2_mwpm_03200403.jpg',
          thumbnail_pic_s02: 'http://03imgmini.eastday.com/mobile/20190314/20190314154418_e4ea1958741e207be4a471367b35dbf9_1_mwpm_03200403.jpg',
          thumbnail_pic_s03: 'http://03imgmini.eastday.com/mobile/20190314/20190314154418_e4ea1958741e207be4a471367b35dbf9_3_mwpm_03200403.jpg',
          title: '73岁秦汉近照曝光 气质儒雅风度翩翩',
          uniquekey: 'cf98b457f5e4e803a79f0f747dd7b587',
          url: 'http://mini.eastday.com/mobile/190314154418269.html',
          __proto__: Object
        },
        {
          author_name: '360娱乐',
          category: '娱乐',
          date: '2019-03-14 15:44',
          thumbnail_pic_s: 'http://06imgmini.eastday.com/mobile/20190314/20190314154415_e9cde84e222953e242a75edeb259dfc9_2_mwpm_03200403.jpg',
          thumbnail_pic_s02: 'http://06imgmini.eastday.com/mobile/20190314/20190314154415_e9cde84e222953e242a75edeb259dfc9_1_mwpm_03200403.jpg',
          thumbnail_pic_s03: 'http://06imgmini.eastday.com/mobile/20190314/20190314154415_e9cde84e222953e242a75edeb259dfc9_3_mwpm_03200403.jpg',
          title: '陈松伶《福尔摩师奶》反转不断 真相迷雾渐散引期待',
          uniquekey: '36412a64378c69a902fa88a5a431e976',
          url: 'http://mini.eastday.com/mobile/190314154415421.html',
          __proto__: Object
        },
        {
          author_name: '娱乐箫箫声儿',
          category: '娱乐',
          date: '2019-03-14 15:44',
          thumbnail_pic_s: 'http://05imgmini.eastday.com/mobile/20190314/20190314154408_3ab48ae1dae27b6c4bcea7ea7abe0ad0_3_mwpm_03200403.jpg',
          thumbnail_pic_s02: 'http://05imgmini.eastday.com/mobile/20190314/20190314154408_3ab48ae1dae27b6c4bcea7ea7abe0ad0_2_mwpm_03200403.jpg',
          thumbnail_pic_s03: 'http://05imgmini.eastday.com/mobile/20190314/20190314154408_3ab48ae1dae27b6c4bcea7ea7abe0ad0_4_mwpm_03200403.jpg',
          title: '当明星是副业？李小璐有5家超市不算什么，他一天收入一个亿',
          uniquekey: '31cbdc2797c418d8e7cbd3f2fb15b44a',
          url: 'http://mini.eastday.com/mobile/190314154408231.html',
          __proto__: Object
        },
        {
          author_name: '遨博智能科技',
          category: '娱乐',
          date: '2019-03-14 15:43',
          thumbnail_pic_s: 'http://08imgmini.eastday.com/mobile/20190314/20190314154353_b7d12122e31d60f780cf81edaa01cf07_2_mwpm_03200403.jpg',
          thumbnail_pic_s02: 'http://08imgmini.eastday.com/mobile/20190314/20190314154353_b7d12122e31d60f780cf81edaa01cf07_7_mwpm_03200403.jpg',
          thumbnail_pic_s03: 'http://08imgmini.eastday.com/mobile/20190314/20190314154353_b7d12122e31d60f780cf81edaa01cf07_6_mwpm_03200403.jpg',
          title: '【AUBO＆头条】遨博小i登陆浙江卫视！看铁臂柔情撩金马影后',
          uniquekey: '302fa3885cb67243c4dfaa44ec952f36',
          url: 'http://mini.eastday.com/mobile/190314154353487.html',
          __proto__: Object
        },
        {
          author_name: '教书匠说',
          category: '娱乐',
          date: '2019-03-14 15:43',
          thumbnail_pic_s: 'http://06imgmini.eastday.com/mobile/20190314/20190314154340_54bbf774fe4c562d9dc130c7f8a8512a_3_mwpm_03200403.jpg',
          thumbnail_pic_s02: 'http://06imgmini.eastday.com/mobile/20190314/20190314154340_54bbf774fe4c562d9dc130c7f8a8512a_1_mwpm_03200403.jpg',
          thumbnail_pic_s03: 'http://06imgmini.eastday.com/mobile/20190314/20190314154340_54bbf774fe4c562d9dc130c7f8a8512a_5_mwpm_03200403.jpg',
          title: '王鸥再次暗讽杨幂？在粉丝群里发了3句话，网友：高级怼人！',
          uniquekey: '6c9c70842912dd3c8ade57ff4d36232c',
          url: 'http://mini.eastday.com/mobile/190314154340483.html',
          __proto__: Object
        },
        {
          author_name: '北国网',
          category: '娱乐',
          date: '2019-03-14 15:43',
          thumbnail_pic_s: 'http://04imgmini.eastday.com/mobile/20190314/20190314154338_12df673b0cda7606cc43c76558a7df1c_3_mwpm_03200403.jpg',
          thumbnail_pic_s02: 'http://04imgmini.eastday.com/mobile/20190314/20190314154338_12df673b0cda7606cc43c76558a7df1c_2_mwpm_03200403.jpg',
          thumbnail_pic_s03: 'http://04imgmini.eastday.com/mobile/20190314/20190314154338_12df673b0cda7606cc43c76558a7df1c_1_mwpm_03200403.jpg',
          title: '人气作家素衫清韵做客悦读咖，新作《丞欢医下》咪咕阅读独家首发',
          uniquekey: 'bd7cd0f5f84b91479f62aae2bf07ed80',
          url: 'http://mini.eastday.com/mobile/190314154338208.html',
          __proto__: Object
        },
        {
          author_name: '焜峰传媒',
          category: '娱乐',
          date: '2019-03-14 15:43',
          thumbnail_pic_s: 'http://07imgmini.eastday.com/mobile/20190314/20190314154331_a8fe5222c19e42b9e72b11034b6f2e99_2_mwpm_03200403.jpg',
          thumbnail_pic_s02: 'http://07imgmini.eastday.com/mobile/20190314/20190314154331_a8fe5222c19e42b9e72b11034b6f2e99_3_mwpm_03200403.jpg',
          thumbnail_pic_s03: 'http://07imgmini.eastday.com/mobile/20190314/20190314154331_a8fe5222c19e42b9e72b11034b6f2e99_1_mwpm_03200403.jpg',
          title: '包贝尔爱情升温，喜提二胎，名字更加神奇',
          uniquekey: 'ebc94d31d0325e53999e35890e456da1',
          url: 'http://mini.eastday.com/mobile/190314154331824.html',
          __proto__: Object
        },
        {
          author_name: '猎人娱乐',
          category: '娱乐',
          date: '2019-03-14 15:43',
          thumbnail_pic_s: 'http://07imgmini.eastday.com/mobile/20190314/2019031415_095e922c21e64dcdb5d5f3da2812f2ac_5766_cover_mwpm_03200403.jpg',
          thumbnail_pic_s02: 'http://07imgmini.eastday.com/mobile/20190314/2019031415_d35f98e42bf645b590f8365acd23a88c_9751_cover_mwpm_03200403.jpg',
          thumbnail_pic_s03: 'http://07imgmini.eastday.com/mobile/20190314/2019031415_33bb912ad98448da969b5a43d21f4a1d_2068_cover_mwpm_03200403.jpg',
          title: '电视剧收视排行榜！5部电视剧火到日日上热搜，前三名超冷门',
          uniquekey: '36549fe7d2c14c977ea92d6a5727eb6f',
          url: 'http://mini.eastday.com/mobile/190314154321816.html',
          __proto__: Object
        },
        {
          author_name: '中国网',
          category: '娱乐',
          date: '2019-03-14 15:42',
          thumbnail_pic_s: 'http://04imgmini.eastday.com/mobile/20190314/20190314154251_dd0dc6b01bcefac64abec31c234592c0_6_mwpm_03200403.jpg',
          thumbnail_pic_s02: 'http://04imgmini.eastday.com/mobile/20190314/20190314154251_dd0dc6b01bcefac64abec31c234592c0_4_mwpm_03200403.jpg',
          thumbnail_pic_s03: 'http://04imgmini.eastday.com/mobile/20190314/20190314154251_dd0dc6b01bcefac64abec31c234592c0_3_mwpm_03200403.jpg',
          title: '公认的6位不老男神，林志颖何炅毋庸置疑，而64岁的他，简直逆天',
          uniquekey: '7fee93b77f6898ed2de75706b2c58f7e',
          url: 'http://mini.eastday.com/mobile/190314154251534.html',
          __proto__: Object
        },
        {
          author_name: '追呗APP',
          category: '娱乐',
          date: '2019-03-14 15:42',
          thumbnail_pic_s: 'http://08imgmini.eastday.com/mobile/20190314/20190314154249_45b0f10cdb037e5488d24a2714b72bd6_7_mwpm_03200403.jpg',
          thumbnail_pic_s02: 'http://08imgmini.eastday.com/mobile/20190314/20190314154249_45b0f10cdb037e5488d24a2714b72bd6_1_mwpm_03200403.jpg',
          thumbnail_pic_s03: 'http://08imgmini.eastday.com/mobile/20190314/20190314154249_45b0f10cdb037e5488d24a2714b72bd6_2_mwpm_03200403.jpg',
          title: '章子怡挑战跳伞，一路小跑上厕所，谢娜与她形成鲜明对比',
          uniquekey: '29b15f5b19d82156d9942a8322ae30d5',
          url: 'http://mini.eastday.com/mobile/190314154249623.html',
          __proto__: Object
        },
        {
          author_name: '四味毒叔',
          category: '娱乐',
          date: '2019-03-14 15:42',
          thumbnail_pic_s: 'http://05imgmini.eastday.com/mobile/20190314/20190314154229_74f47a21a1019629ff11b0d3350d05a2_2_mwpm_03200403.jpg',
          thumbnail_pic_s02: 'http://05imgmini.eastday.com/mobile/20190314/20190314154229_74f47a21a1019629ff11b0d3350d05a2_1_mwpm_03200403.jpg',
          thumbnail_pic_s03: 'http://05imgmini.eastday.com/mobile/20190314/20190314154229_74f47a21a1019629ff11b0d3350d05a2_15_mwpm_03200403.jpg',
          title: '3个家庭3个孩子30年，导演王小帅“保守美学”后的伤感与突破',
          uniquekey: '7b65f36fbe196b51470b0dac1d0f897f',
          url: 'http://mini.eastday.com/mobile/190314154229402.html',
          __proto__: Object
        },
        {
          author_name: '凤凰网',
          category: '娱乐',
          date: '2019-03-14 15:42',
          thumbnail_pic_s: 'http://02imgmini.eastday.com/mobile/20190314/20190314154224_fd7d85f3b9f861f40dd400ce3d0c1c60_2_mwpm_03200403.jpg',
          thumbnail_pic_s02: 'http://02imgmini.eastday.com/mobile/20190314/20190314154224_fd7d85f3b9f861f40dd400ce3d0c1c60_1_mwpm_03200403.jpg',
          thumbnail_pic_s03: 'http://02imgmini.eastday.com/mobile/20190314/20190314154224_fd7d85f3b9f861f40dd400ce3d0c1c60_4_mwpm_03200403.jpg',
          title: '赵雅芝穿长款收腰马甲气质佳 与古建筑拍照沉醉中国风',
          uniquekey: '76caf06b250c6327eaa506f348f035be',
          url: 'http://mini.eastday.com/mobile/190314154224824.html',
          __proto__: Object
        }
      ]
    }
  }
}

Mock.mock(/toutiao-ali.juheapi.com\/toutiao\/index/, news)
