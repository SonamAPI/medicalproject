

import React, { Component } from 'react'

export default class CommonClass extends Component {
    static baz = [

        { medId: 1, medicineName: "Medicine 1", medicineType: " type", expDate: "daye 1", medicineQuantity: "1" },
        { medId: 2, medicineName: "Medicine 2", medicineType: " type2", expDate: "daye 2", medicineQuantity: "2" },
        { medId: 3, medicineName: "Medicine 3", medicineType: " type", expDate: "daye 3", medicineQuantity: "3" },
        { medId: 4, medicineName: "Medicine 4", medicineType: " type", expDate: "daye 4", medicineQuantity: "4" },
        { medId: 5, medicineName: "Medicine 5", medicineType: " type", expDate: "daye 5", medicineQuantity: "5" },
        { medId: 6, medicineName: "Medicine 6", medicineType: " type", expDate: "daye 6", medicineQuantity: "6" }
      ];
  render() {
    return (
      <div>CommonClass</div>
    )
  }
}
