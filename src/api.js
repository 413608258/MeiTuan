/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan
 * @flow
 */
import Util from "./common/Util";


export default {
    recommend: 'http://api.meituan.com/group/v1/recommend/homepage/city/1?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=mrUZYo7999nH8WgTicdfzaGjaSQ=&__skno=51156DC4-B59A-4108-8812-AD05BF227A47&__skts=1434530933.303717&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&ci=1&client=iphone&limit=40&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-06-17-14-50363&offset=0&position=39.983497,116.318042&userId=10086&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_gxh_82__nostrategy__leftflow___ab_pindaoshenyang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_trip_yidizhoubianyou__b__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___ab_pind',


    discount: 'http://api.meituan.com/group/v1/deal/topic/discount/city/1?ci=1&client=iphone&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-06-17-14-50363&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_gxh_82__nostrategy__leftflow___ab_pindaoshenyang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_trip_yidizhoubianyou__b__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___ab_pindaoquxincelue__a__leftflow___ab_i_group_5_5_onsite__b__b___ab_i_group_5_6_searchkuang__a__leftflow&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7',

    // "团购"页面
    menuInfo: [
        {title: '美食', icon: require('./img/home/icon_homepage_food_category.png')},
        {title: '电影', icon: require('./img/home/icon_homepage_movie_category.png')},
        {title: '酒店', icon: require('./img/home/icon_homepage_hotel_category.png')},
        {title: 'KTV', icon: require('./img/home/icon_homepage_ktv_category.png')},
        {title: '优惠买单', icon: require('./img/home/icon_homepage_default.png')},
        {title: '周边游', icon: require('./img/home/icon_homepage_foottreat_category.png')},
        {title: '生活服务', icon: require('./img/home/icon_homepage_life_service_category.png')},
        {title: '休闲娱乐', icon: require('./img/home/icon_homepage_entertainment_category.png')},
        {title: '丽人/美发', icon: require('./img/home/icon_homepage_beauty_category.png')},
        {title: '购物', icon: require('./img/home/icon_homepage_shopping_category.png')},

        {title: '丽人/美发', icon: require('./img/home/icon_homepage_beauty_category.png')},
        {title: '电影', icon: require('./img/home/icon_homepage_movie_category.png')},
        {title: '周边游', icon: require('./img/home/icon_homepage_foottreat_category.png')},
        {title: '酒店', icon: require('./img/home/icon_homepage_hotel_category.png')},
        {title: '优惠买单', icon: require('./img/home/icon_homepage_default.png')},
        {title: '休闲娱乐', icon: require('./img/home/icon_homepage_entertainment_category.png')},
        {title: 'KTV', icon: require('./img/home/icon_homepage_ktv_category.png')},
    ],

    // "附近"页面
    nearbyTabs: [
        {
            title: '享美食',
            type: ['热门', '面包甜点', '小吃快餐', '川菜', '日本料理', '韩国料理', '台湾菜', '东北菜'],
        },
        {
            title: '住酒店',
            type: ['热门', '商务出行', '公寓民宿', '情侣专享', '高星特惠'],
        },
        {
            title: '爱玩乐',
            type: ['热门', 'KTV', '足疗按摩', '洗浴汗蒸',  '电影院', '美发', '美甲'],
        },
        {
            title: '全部',
            type: [],
        },
    ],
    //"我的"页面
    mineData: [
        [
            {title: '我的钱包', subtitle: '办信用卡', image: require('./img/mine/icon_mine_wallet.png')},
            {title: '余额', subtitle: `￥${Util.numberFormat(95872385)}`, image: require('./img/mine/icon_mine_balance.png')},
            {title: '抵用券', subtitle: '63', image: require('./img/mine/icon_mine_voucher.png')},
            {title: '会员卡', subtitle: '2', image: require('./img/mine/icon_mine_membercard.png')}
        ],
        [
            {title: '好友去哪', image: require('./img/mine/icon_mine_friends.png')},
            {title: '我的评价', image: require('./img/mine/icon_mine_comment.png')},
            {title: '我的收藏', image: require('./img/mine/icon_mine_collection.png')},
            {title: '会员中心', subtitle: 'v15', image: require('./img/mine/icon_mine_membercenter.png')},
            {title: '积分商城', subtitle: '好礼已上线', image: require('./img/mine/icon_mine_member.png')}
        ],
        [
            {title: '客服中心', image: require('./img/mine/icon_mine_customerService.png')},
            {title: '关于美团', subtitle: '我要合作', image: require('./img/mine/icon_mine_aboutmeituan.png')}
        ]
    ],

}

export function recommendUrlWithId(id: string) {
    return 'http://api.meituan.com/group/v1/deal/recommend/collaborative?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=hWCwhGYpNTG7TjXWHOwPykgoKX0%3D&__skno=433ACF85-E134-4FEC-94B5-DA35D33AC753&__skts=1436343274.685593&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&cate=0&ci=1&cityId=1&client=iphone&did=' + id + '&district=-1&fields=id%2Cslug%2Cimgurl%2Cprice%2Ctitle%2Cbrandname%2Crange%2Cvalue%2Cmlls%2Csolds&hasbuy=0&latlng=0.000000%2C0.000000&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-07-08-15-36746&offset=0&scene=view-v4&userId=10086&userid=10086&utm_campaign=AgroupBgroupD100Fab_i550poi_ktv__d__j___ab_i_group_5_3_poidetaildeallist__a__b___ab_gxhceshi0202__b__a___ab_pindaoquxincelue0630__b__b1___ab_i_group_5_6_searchkuang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_i550poi_xxyl__b__leftflow___ab_b_food_57_purepoilist_extinfo__a__a___ab_waimaiwending__a__a___ab_waimaizhanshi__b__b1___ab_i550poi_lr__d__leftflow___ab_i_group_5_5_onsite__b__b___ab_xinkeceshi__b__leftflowGhomepage_guess_27774127&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7'
}


export function groupPurchaseDetailWithId(id: string) {
    return 'http://api.meituan.com/group/v1/deal/list/id/' + id + '?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=4NDQ%2BojQ%2BZGArOWQCEgWI19Pzus%3D&__skno=803C28CE-8BA8-4831-B2DE-7BCD484348D9&__skts=1435888257.411030&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&ci=1&client=iphone&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-07-03-09-14430&userid=10086&utm_campaign=AgroupBgroupC1080988208017226240_c0_e68cafa9e104898bb8bfcd78b64aef671D100Fab_i_group_5_3_poidetaildeallist__a__b___ab_chunceshishuju__a__a___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_waimaiwending__a__a___ab_gxh_82__nostrategy__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_pindaoshenyang__a__leftflow___ab_pindaoquxincelue0630__b__b1___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___b1junglehomepagecatesort__b__leftflow___ab_i_group_5_5_onsite__b__b___ab_i_group_5_6_searchkuang__a__leftflowGhomepage_guess_27774127&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7'
}