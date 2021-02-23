const url = "https://covid-api.mmediagroup.fr/v1/cases";
        
fetch(url)
    .then(function (response) {
        return response.json();
    }).then(function (json) {
        // console.log(json);
        // console.log("Global population: "+json.Global.All.population);
        // console.log("Global confirmed cases: " +json.Global.All.confirmed);
        // console.log("Global death by covid-19: " + json.Global.All.deaths);
        // console.log("Global recovered cases: " + json.Global.All.recovered);
        // console.log("Global death rate: " +json.Global.All.deaths / json.Global.All.confirmed * 100 + "%");
        // console.log("Global recover rate: " +json.Global.All.recovered / json.Global.All.confirmed * 100 + "%");

        let globalResult = "";
        globalResult += "<p class ='worldPopulation'> Global Population: " + json.Global.All.population + "</p>";
        globalResult += "<p class ='worldConfirmedCases'> Global confirmed cases: " +json.Global.All.confirmed + "</p>";
        globalResult += "<p class ='worldDeathCases'> Global death by covid-19: " + json.Global.All.deaths + "</p>";
        globalResult += "<p class ='worlrecoveredCases'> Global recovered cases: " + json.Global.All.recovered + "</p>";
        globalResult += "<p class ='worlrecoveredCases'> Global death rate: " + json.Global.All.deaths / json.Global.All.confirmed * 100 + "% </p>";
        globalResult += "<p class ='worlrecoveredCases'> Global recover rate: " + json.Global.All.recovered / json.Global.All.confirmed * 100 + "% </p>";
        
        document.getElementById("worldWideData").innerHTML = globalResult;
    });

    

    document.getElementById("countrySubmit").addEventListener("click", function(event) {

        event.preventDefault();

        const value = document.getElementById("countryInput").value;

        if (value === "")
        return;
        console.log(value);
        const countryUrl = "https://covid-api.mmediagroup.fr/v1//cases?country=" + value; 

        fetch(countryUrl)
            .then(function (response) {
                return response.json();
            }).then(function (json) {
                // console.log(json);
                // console.log(value + " Caplital: " + json.All.capital_city);
                // console.log(value + " Life expectancy: " + json.All.life_expectancy);
                // console.log(value + " Population: " + json.All.population);
                // console.log(value + " Confirmed cases: " + json.All.confirmed);
                // console.log(value + " Death by covid-19: " + json.All.deaths);
                // console.log(value + " Recovered cases: " + json.All.recovered);
                
                let countryResult = "";
                
                
                countryResult += "<p>" + value + " Caplital: " + json.All.capital_city + "</p>";
                countryResult += "<p>" + value + " Life expectancy: " + json.All.life_expectancy + "</p>";
                countryResult += "<p>" + value + " Population: " + json.All.population + "</p>";
                countryResult += "<p>" + value + " Confirmed cases: " + json.All.confirmed + "</p>";
                countryResult += "<p>" + value + " Death by covid-19: " + json.All.deaths + "</p>";
                countryResult += "<p>" + value + " Recovered cases: " + json.All.recovered + "</p>";

                document.getElementById("countryData").innerHTML = countryResult;

            });

    });
