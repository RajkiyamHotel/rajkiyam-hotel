// let getRes = [{ code: 200, message: "API is working!!" }];

// interface requestType { 
//     method: string; 
//     body: { 
//         name: string; 
//     }; 
// }
// interface responseType {
//     status: (arg0: number) => {
//         (): any;
//         new (): any;
//         json: {
//             (arg0: {
//                 code: number;
//                 message: string;
//             }[]): void;
//             new (): any;
//         };
//     };
// }
// export default function handler(req: requestType, res: responseType) {
//   if (req.method === "GET") {
//     res.status(200).json(getRes);
//   } 
// }
