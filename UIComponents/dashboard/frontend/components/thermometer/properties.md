## Options:

| Option        | Default value   | Description   | Required   |
| ------------- |:-------------:|:-------------:|:-------------:|
  percent | 0 | The current value of thermometer (0 to 100). | NO
  size      | null | Set the size (small or big). | NO
  height     | 220	 | Set the height. | NO
  sectors | [0, 25, 50, 75, 100] | Array of integer values | NO
  colors | ["#2196F3", "#8BC34A", "#F44336"]  | sector-based color change
  max | 100 | Set maximum value | No
  unit | °C | Set unit | No
  api       | undefined    | 	Name of the api to call backend data.		| Required if calling data from backend	 
  on-format-data | undefined | Callback function to be called after data is returned from backend | NO
  transport |  'wss'     | 	method used to call api (can take "https" or "wss").		 | NO
  msg-tag   | null      | 	Subscribe to socket messages with tag name.		| NO     
  api-params  | null       | 	api parameters.  					| NO
 