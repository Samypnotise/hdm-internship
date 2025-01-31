"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiModule = void 0;
const common_1 = require("@nestjs/common");
const CoreModule_1 = require("../Core/CoreModule");
const Utils_1 = require("./Utils/Utils");
const Repositories_1 = require("./Repository/Repositories");
const Resolvers_1 = require("./Resolver/Resolvers");
const GraphqlModule_1 = require("../Core/GraphqlModule");
const config_1 = require("@nestjs/config");
let ApiModule = class ApiModule {
};
exports.ApiModule = ApiModule;
exports.ApiModule = ApiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                validate: (config) => {
                    if (!config.JWT_SECRET) {
                        throw new Error('JWT_SECRET environment variable is missing.');
                    }
                    return config;
                },
            }),
            CoreModule_1.default,
            GraphqlModule_1.default,
        ],
        controllers: [],
        providers: [...Repositories_1.Repositories, ...Resolvers_1.Resolvers, ...Utils_1.Utils],
    })
], ApiModule);
//# sourceMappingURL=ApiModule.js.map