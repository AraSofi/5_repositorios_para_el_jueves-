class Persona {
    nombre;
    apellido;
    fecha_nacimiento;
    #correo;
    /**
     * 
     * @param {string} correo
     */
    Actualizar_correo = function(correo){
        this.#correo = correo
    }
    /**
     * 
     * @returns {int}
     */

        Calcular_edad = function(){
        let fecha_actual = new Date ();
        let fecha_nacimiento = new Date(this.fecha_nacimiento);
        let edad = fecha_actual.getFullYear() - fecha_nacimiento.getFullYear(); 
        let mes = fecha_actual.getMonth() - fecha_nacimiento.getMonth();
        if (mes < 0 || (mes === 0 && fecha_actual.getDate() < fecha_nacimiento.getDate())) {
            edad--;
        }
        return parseInt (edad);
    }

    }


