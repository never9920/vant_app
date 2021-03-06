import Vue from 'vue'
import {
    Button,
    Tabbar,
    TabbarItem,
    NavBar,
    Icon,
    Popup,
    Search,
    Swipe,
    SwipeItem,
    Lazyload,
    Grid,
    GridItem,
    Image,
    Tab,
    Tabs,
    List,
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton,
    Sku,
    Toast,
    Card,
    SwipeCell,
    Dialog,
    SubmitBar,
    checkbox,
    Sidebar,
    SidebarItem,
    Cell,
    CellGroup,
    CouponCell,
    CouponList,
    Form,
    Field,
    Divider
} from 'vant'

Vue.use(Button);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Popup);
Vue.use(Search);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Image);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(List);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Sku);
Vue.use(Card);
Vue.use(SwipeCell);
Vue.use(SubmitBar);
Vue.use(checkbox);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(CouponCell);
Vue.use(CouponList);
Vue.use(Form);
Vue.use(Field);
Vue.use(Divider);


Vue.prototype.$toast = Toast
Vue.prototype.$dialog = Dialog