import {NotificationManager} from "react-notifications";

    export const fetchDataPackage = async () =>{

        var countries = []
        try {

            await fetch('http://localhost:3000/countriesListPackages', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            }).then(function (response) {
                return response.json();
            }).then(function (myJson) {
                if (myJson['msg'] === '') {
                    NotificationManager.warning('تاكد من إدخال البيانات', '', 3000);
                    return countries
                }
                myJson['msg'].forEach(
                    (country) => {
                        countries.push(country["country"])
                    }
                )
            }).catch(()=>{
                NotificationManager.warning('تاكد من إدخال البيانات', '', 3000);
            });

        }catch (e) {
            console.log(e)
        }

        return countries;
    }

    export const fetchDataPaper = async () =>{
        try {

        var countries = []
        await fetch('http://localhost:3000/countriesListPaper', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }).then(function (response) {
            return response.json();
        }).then(function (myJson) {
            if (myJson['msg'] === '') {
                NotificationManager.warning('تاكد من إدخال البيانات', '', 3000);
                return countries
            }
            myJson['msg'].forEach(
                (country) => {
                    countries.push(country["country"])
                }
            )
        }).catch(()=>{
            NotificationManager.warning('تاكد من إدخال البيانات', '', 3000);
        });

        }catch (e) {
            console.log(e)
        }

        return countries;
    }

    export let packageType ;
    fetchDataPackage().then(result => {
        packageType = result
    });


    export let paperType ;
    fetchDataPaper().then(result => {
        paperType = result
    });

    export let neighboringCountries = [
        "تركيا",
        "الاردن",
        "سوريا",
        "إيران",
        "السعودية"
    ]
