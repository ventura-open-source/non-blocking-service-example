package main

import (
    "encoding/json"
    "log"
    "net/http"
    "github.com/gorilla/mux"
    "github.com/jinzhu/gorm"
    _ "github.com/jinzhu/gorm/dialects/mysql"
    "./models"
)

func respondWithJSON(w http.ResponseWriter, code int, payload interface{}) {
    response, _ := json.Marshal(payload)
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(code)
    w.Write(response)
}

func GetMessage(w http.ResponseWriter, r *http.Request) {
    respondWithJSON(w, 200, map[string]string{"data": "Welcome from golang"})
}

func GetTrips(w http.ResponseWriter, r *http.Request) {
    db, err := gorm.Open("mysql", "root:root@/ventura_laravel?charset=utf8&parseTime=True&loc=Local")
    if err != nil {
        panic("failed to connect database")
    }
    db.SingularTable(true)

    var trip []models.Trip
    trips := db.Where("project_id = ?", "1").Offset(0).Limit(10).Find(&trip)
    json.NewEncoder(w).Encode(trips)
    defer db.Close()
}

// start server 
func main() {
    router := mux.NewRouter()
    router.HandleFunc("/", GetMessage).Methods("GET")
    router.HandleFunc("/trips", GetTrips).Methods("GET")
    log.Fatal(http.ListenAndServe(":8002", router))
}
