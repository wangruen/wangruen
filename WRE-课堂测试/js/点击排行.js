// ============================================
// 作者：王如恩
// 建立时间：2026-11-04
// 使用大模型：GLM-5.3-Flash
// 功能名称：新闻"点击排行"选项卡切换与列表渲染
// 注：所有 JS 变量与函数均以 wre_ 开头
// ============================================

// 功能：定义"实时点击"选项卡的排行数据（新闻标题 + 点击量）
var wre_realtimeData = [
    ['全国多地迎来强降雪 各地积极应对', '402115'],
    ['神舟飞船新任务公布 宇航员选拔启动', '386402'],
    ['春运火车票明日开抢 购票攻略出炉', '355981'],
    ['多地景区门票降价 促冬季旅游消费', '312047'],
    ['5G套餐昨日正式开售 你会办理吗', '289113'],
    ['国际油价大幅下跌 国内油价或下调', '245670'],
    ['大学生就业报告发布 这类专业最吃香', '198324'],
    ['冬季流感高发 专家支招如何预防', '153208']
];

// 功能：定义"24小时排行"选项卡的排行数据（与设计图 1.jpg 完全一致）
var wre_dayData = [
    ['灯塔水母：地球上唯一不死生物', '365322'],
    ['阿里巴巴全资收购UC 前永福将执掌', '311246'],
    ['亚马逊惊现三米长巨滑舌鱼用肺呼吸', '296883'],
    ['奉化男子上山抓野味 遭遇极濒危动物', '266061'],
    ['大白鲨深海失踪 或被大型生物猎杀', '243936'],
    ['南非小犀牛目睹母亲被猎杀不肯离去', '224346'],
    ['余额宝周岁：收益率"过山车"', '172694'],
    ['"尸油入餐桌"纯属无稽之谈', '128789']
];

// 功能：根据传入的数据渲染排行列表，前 3 名序号套用 k.jpg 橙色方框样式
function wre_renderList(wre_data) {
    var wre_html = '';
    for (var wre_i = 0; wre_i < wre_data.length; wre_i++) {
        wre_html += '<li' + (wre_i < 3 ? ' class="wre_top3"' : '')
            + '><span class="wre_num">' + (wre_i + 1) + '</span>'
            + '<span class="wre_txt">' + wre_data[wre_i][0] + '</span>'
            + '<span class="wre_count">' + wre_data[wre_i][1] + '</span></li>';
    }
    document.getElementById('wre_rankList').innerHTML = wre_html;
}

// 功能：切换选项卡——先清除所有选项卡的选中状态，再设置当前元素为选中，并渲染对应的排行数据
function wre_switchTab(wre_tabs, wre_index) {
    // 先清除所有选项卡的选中状态
    for (var wre_i = 0; wre_i < wre_tabs.length; wre_i++) {
        wre_tabs[wre_i].classList.remove('wre_selected');
    }
    // 再设置当前元素的选中状态
    wre_tabs[wre_index].classList.add('wre_selected');
    // 根据所选选项卡渲染对应数据
    wre_renderList(wre_index === 0 ? wre_realtimeData : wre_dayData);
}

// 功能：初始化点击排行组件——默认渲染"24小时排行"数据，并为每个选项卡添加点击监听事件
function wre_initRank() {
    var wre_tabs = document.querySelectorAll('#wre_rankTabs .wre_rank_tab');
    wre_renderList(wre_dayData);
    for (var wre_i = 0; wre_i < wre_tabs.length; wre_i++) {
        (function (wre_index) {
            wre_tabs[wre_index].addEventListener('click', function () {
                wre_switchTab(wre_tabs, wre_index);
            });
        })(wre_i);
    }
}

// 功能：页面加载后立即初始化排行组件
wre_initRank();
