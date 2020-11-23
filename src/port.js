(function exportPort() {
    function Port(name) {
        this.name = name;
        this.ships = [];
    }

    Port.prototype.addShip = function(ship) {
        this.ships.push(ship);
    }

    Port.prototype.removeShip = function(ship) {
        if (this.ships.lenght >= 0) {
            return 'No ships in port'
        }
        for (i=0; i < this.ships.length; i++) {
            if (this.ships[i] === ship) {
                this.ships.splice(i, 1);
            }
        }
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Port;
    } else {
        window.Port = Port;
    }
}());

// module.exports = Port;