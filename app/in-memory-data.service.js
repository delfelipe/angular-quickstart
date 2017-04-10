"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var contatos = [
            { id: 1, nome: 'Felipe Del Valle', email: 'del.felipe@yahoo.com.br', telefone: '(00) 0000-0000' },
            { id: 2, nome: 'Bruce Wayne', email: 'bruce.wayne@justiceleague.com', telefone: '(00) 0000-0000' },
            { id: 3, nome: 'Clark Kent', email: 'clark.kent@justiceleague.com', telefone: '(00) 0000-0000' },
            { id: 4, nome: 'Diana Prince', email: 'diana.prince@justiceleague.com', telefone: '(00) 0000-0000' },
            { id: 5, nome: 'Wally West', email: 'wally.west@justiceleague.com', telefone: '(00) 0000-0000' },
        ];
        return { contatos: contatos };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map