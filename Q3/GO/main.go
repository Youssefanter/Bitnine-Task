package main

import (
	"database/sql"
	"encoding/json"
	"fmt"

	_ "github.com/lib/pq"
)

func main(){
	conn,err := sql.Open("postgres","user=postgres password=yooiioo123 dbname=postgres sslmode=disable")
	if err ==nil {
		fmt.Println("Successfully connected to DB :)")
	}

	rows,err :=conn.Query("SELECT * from public.user_table")
	if err != nil{
		fmt.Print(err)
	}
	// fmt.Println(rows)
  defer rows.Close()
	// fmt.Println(rows)

	columns,err := rows.Columns()
	if err!=nil {
		fmt.Print(err)
	}
	// fmt.Println(columns)

	values:= make([]interface{},len(columns))

	scan:= make([]interface{},len(values))

	// println(values)
	// println(scan)

	for i:= range values {
		scan[i]=&values[i]
	}

	results := make([]string,0)
	results = append(results, "\"Status_code\": 200")
	for rows.Next(){
		err=rows.Scan(scan...)
		if err!=nil {
			fmt.Print(err)
		}

	// Data Structure to hold the data fetched from the database
	rowMap := make(map[string]interface{})
	for i,col := range values{
		if col != nil {
			rowMap[columns[i]]=col
		}
	}

	json,err := json.MarshalIndent(rowMap,""," ")
	
	if err!=nil {
		fmt.Print(err)
	}
	results=append(results,string(json))
	}
	fmt.Println(results)
	
}