//Счётчик объектов

function Article() {
    this.created = new Date();
    Article.objectsCounter++;
    Article.formatDate = this.created.getDate() + '.' + (this.created.getMonth() + 1) + '.' + this.created.getFullYear();
}

Article.objectsCounter = 0;

Article.showStats = function () {
    alert('Всего: ' + this.objectsCounter + ', Последняя: ' + Article.formatDate);
}

new Article();
new Article();

Article.showStats();

new Article();

Article.showStats();
