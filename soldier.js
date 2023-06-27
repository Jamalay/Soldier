const soldier = {
    name: 'J',
    health: 10,
    weapon: {
        weapon_name: 'Калаш',
        bullets: 30,
    },
    stores: 3,
    Shoot: function(){
        if (this.weapon.bullets <= 0){
            console.log('Обойма пуста. Перезаредитесь')
        }
        else{
            this.weapon.bullets--;
            console.log('бах-бах');
        }
    },
    Reload: function(){
        if (this.stores <= 0){
            console.log('не осталось припасов.');
        }
        else{
            this.weapon.bullets = 30;
            stores--;
            console.log('перезарядка')
        }
    },
    toWount: function(){
        if (this.health <= 0){
            console.log('Ты проиграл');
        }
        else{
            this.health--;
        }
    }
}

soldier.Shoot();