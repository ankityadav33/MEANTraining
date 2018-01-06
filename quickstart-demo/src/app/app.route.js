"use strict";
var user_component_1 = require("./user.component");
var about_component_1 = require("./about.component");
var product_component_1 = require("./product.component");
exports.APP_ROUTES = [{
        path: '',
        redirectTo: '/user',
        pathMatch: 'full'
    }, {
        path: 'user',
        component: user_component_1.UserComponent
    }, {
        path: 'about',
        component: about_component_1.AboutComponent
    }, {
        path: 'product',
        component: product_component_1.ProductComponent
    }, {
        path: '**',
        redirectTo: 'user'
    },
];
//# sourceMappingURL=app.route.js.map