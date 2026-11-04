// ============================================
// 作者：王如恩
// 建立时间：2026-11-04
// 使用大模型：GLM-5.3-Flash
// 功能名称：可复用的新闻 Tab 选项卡切换
// ============================================

// 功能：切换选项卡——先清除所有选项卡标题和内容面板的选中状态，再把当前点击的元素设置为选中
// 参数：wre_tabs（所有选项卡标题集合）、wre_panels（所有内容面板集合）、wre_index（当前点击的选项卡下标）
function wre_switchTab(wre_tabs, wre_panels, wre_index) {
    // 先清除所有选项卡的选中状态
    for (var wre_i = 0; wre_i < wre_tabs.length; wre_i++) {
        wre_tabs[wre_i].classList.remove('wre_active');
        wre_panels[wre_i].classList.remove('wre_show');
    }
    // 再设置当前元素的选中状态
    wre_tabs[wre_index].classList.add('wre_active');
    wre_panels[wre_index].classList.add('wre_show');
}

// 功能：初始化一组选项卡（可复用）——传入任意包含 .wre_tab 和 .wre_panel 的容器，即可绑定一套完整的选项卡
function wre_initTabs(wre_box) {
    var wre_tabs = wre_box.querySelectorAll('.wre_tab');
    var wre_panels = wre_box.querySelectorAll('.wre_panel');

    // 功能：为每个选项卡标题添加点击监听事件，点击后切换到对应面板
    for (var wre_i = 0; wre_i < wre_tabs.length; wre_i++) {
        (function (wre_index) {
            wre_tabs[wre_index].addEventListener('click', function () {
                wre_switchTab(wre_tabs, wre_panels, wre_index);
            });
        })(wre_i);
    }
}

// 功能：页面加载完成后，对新闻选项卡容器执行初始化，绑定点击事件
wre_initTabs(document.getElementById('wre_newsTabs'));
