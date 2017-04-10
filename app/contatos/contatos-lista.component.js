"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contato_service_1 = require("./contato.service");
var ContatosListaComponent = (function () {
    function ContatosListaComponent(contatoService) {
        this.contatoService = contatoService;
    }
    ContatosListaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contatoService.getContatos()
            .then(function (contatos) {
            _this.contatos = contatos;
        }).catch(function (err) {
            console.log('Houve um erro: ', err);
        });
    };
    return ContatosListaComponent;
}());
ContatosListaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'contatos-lista',
        templateUrl: 'contatos-lista.component.html'
    }),
    __metadata("design:paramtypes", [contato_service_1.ContatoService])
], ContatosListaComponent);
exports.ContatosListaComponent = ContatosListaComponent;
//# sourceMappingURL=contatos-lista.component.js.map