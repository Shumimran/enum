"use strict";
// Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks,
//  and motorcycles using enums, and show one example.
// Explain & TIP: Enums are like special lists in your code that help you categorize
//  things. They make your code cleaner and easier to understand.
var vahiclesTypes;
(function (vahiclesTypes) {
    vahiclesTypes[vahiclesTypes["car"] = 0] = "car";
    vahiclesTypes[vahiclesTypes["Track"] = 1] = "Track";
    vahiclesTypes[vahiclesTypes["bus"] = 2] = "bus";
})(vahiclesTypes || (vahiclesTypes = {}));
;
console.log(vahiclesTypes.car);
