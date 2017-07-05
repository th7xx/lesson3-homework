 var filmBase = [{
                name : "Титаник", year: 1997
            }, {
                name : "Аватар", year: 2009
            }, {
                name: "Бонни и Клайн", year : 1967
            }, {
                name: "Гарри Поттер и философский камень", year: 2001
            }]; 
            
            function addFilm(dataBase, film){
                dataBase.push(film); 
            }
            
            function deleteFilm(dataBase, film){
                for(var i = 0; i < dataBase.length; i++){
                    if(dataBase[i].name == film.name && dataBase[i].year == film.year){
                        dataBase.splice(i, 1); 
                    }
                }
            }
            
            function showBase(database){
                var res = ""; 
                for(var i = 0; i < database.length; i++){
                    if(database[i].year == undefined){
                        res += database[i].name + "\n"; 
                    }
                    else{
                        res += database[i].name + " (" + database[i].year + ") \n"; 
                    }
                }
                alert("В наличии: "+ getBaseLength(filmBase) +" фильма\n" + res); 
            }
            
            function getBaseLength(database){
                return database.length; 
            }
            
            function getCommandInfo(){
                alert("Добавить(1) - добавить фильм в базу фильмов\nУдалить(2) - удалить фильм из базы фильмов\nПоказать базу(3) - вывести на экран все фильмы в базе\nСправка(4) - основная информация о командах\nВыйти(5) - выход из программы"); 
            }
            
            function convertInputToFilm(input){
                var film = {}; 
                input = input.split(" "); 
                if(isNaN(parseInt(input[0]))){
                        if(input[0]!= "" && parseInt(input[1]) > 1895){
                            film["name"] = input[0]; 
                            film["year"] = input[1]; 
                        }
                        else return false; 
                    }
                    else{
                        if(input[1]!= "" && parseInt(input[0]) > 1895){
                            film["name"] = input[1]; 
                            film["year"] = input[0];
                        } 
                        else{
                            return false; 
                        }
                    }
                return film; 
            }
            
            var ready = confirm("Добро пожаловать в базу фильмов. Начать работу сейчас?"); 
            if(ready){
                while(true){
                    var cmd = prompt("Выберите цифру команды:\n1. Добавить - 1\n2. Удалить - 2\n3. Показать базу - 3\n4. Справка - 4\n5. Выйти - 5");
                    if (cmd == "5") break; 
                    switch(cmd){
                        case ("1"):
                            var input = prompt("Введите фильм, который необходимо добавить (название и год через пробел)."); 
                            var film = convertInputToFilm(input); 
                            if (film == false){
                                alert("Некорректные данные"); 
                                break; 
                            }
                            addFilm(filmBase, film); 
                            break; 
                        case("2"):
                            var input = prompt("Введите фильм, который необходимо удалить (название и год через пробел).");
                            var film = convertInputToFilm(input);
                            if (film == false){
                                alert("Некорректные данные"); 
                                break; 
                            }
                            deleteFilm(filmBase, film); 
                            break; 
                        case("3"):
                            showBase(filmBase);  
                            break; 
                        case("4"):
                            getCommandInfo(); 
                            break; 
                        default:
                            alert("Команда не найдена"); 
                            break ;
                    }
                }
            }