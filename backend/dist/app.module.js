"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app/app.controller");
const order_info_module_1 = require("./order-info/order-info.module");
const typeorm_1 = require("@nestjs/typeorm");
const engineer_info_module_1 = require("./engineer-info/engineer-info.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const registration_module_1 = require("./engineer-registration/registration.module");
const refresh_token_module_1 = require("./refresh_token/refresh_token.module");
const admin_module_1 = require("./admin/admin.module");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'public/'),
                serveRoot: '/api-docs',
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'ep-cold-band-a71ed1zj-pooler.ap-southeast-2.aws.neon.tech',
                url: 'postgres://default:hNOtdfu8sWy3@ep-cold-band-a71ed1zj-pooler.ap-southeast-2.aws.neon.tech:5432/verceldb?sslmode=require',
                ssl: { rejectUnauthorized: false },
                username: 'default',
                password: 'hNOtdfu8sWy3',
                database: 'verceldb',
                entities: [],
                autoLoadEntities: true,
                synchronize: false,
                logging: false,
            }),
            order_info_module_1.OrderInfoModule,
            engineer_info_module_1.EngineerInfoModule,
            registration_module_1.RegistrationModule,
            refresh_token_module_1.RefreshTokenModule,
            admin_module_1.AdminModule,
            auth_module_1.AuthModule,
            registration_module_1.RegistrationModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map