from driver import get_data_as_json

status,data=get_data_as_json()

print("{")
print(f"""\"status_code\":{status},
  \"data\":[""")
for row in data:
    print(row)
print("""   ]
}
""")

