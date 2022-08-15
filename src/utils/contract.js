import Web3 from "web3/dist/web3.min.js";

const web3 = new Web3(new Web3.providers.HttpProvider('http:///127.0.0.1:7545'));

const contractAbi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "professorId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "subjectId",
				"type": "uint256"
			}
		],
		"name": "addCourses",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "courseId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "studentId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "grade",
				"type": "uint256"
			}
		],
		"name": "addGrades",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "surname",
				"type": "string"
			}
		],
		"name": "addProfessors",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "surname",
				"type": "string"
			}
		],
		"name": "addStudents",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "subjectName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ects",
				"type": "uint256"
			}
		],
		"name": "addSubjects",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "gradeId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_grade",
				"type": "uint256"
			}
		],
		"name": "setGrade",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "allCourses",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "id",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "_address",
								"type": "address"
							},
							{
								"internalType": "string",
								"name": "name",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "surname",
								"type": "string"
							}
						],
						"internalType": "struct ESSM.Professor",
						"name": "lecturer",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "id",
								"type": "uint256"
							},
							{
								"internalType": "string",
								"name": "subjectName",
								"type": "string"
							},
							{
								"internalType": "uint256",
								"name": "ects",
								"type": "uint256"
							}
						],
						"internalType": "struct ESSM.Subject",
						"name": "subject",
						"type": "tuple"
					}
				],
				"internalType": "struct ESSM.Course[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "allProfessors",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "_address",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "surname",
						"type": "string"
					}
				],
				"internalType": "struct ESSM.Professor[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "allStudents",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "surname",
						"type": "string"
					}
				],
				"internalType": "struct ESSM.Student[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "allSubjects",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "subjectName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "ects",
						"type": "uint256"
					}
				],
				"internalType": "struct ESSM.Subject[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "studentId",
				"type": "uint256"
			}
		],
		"name": "getCoursesAttendedBy",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "id",
								"type": "uint256"
							},
							{
								"components": [
									{
										"internalType": "uint256",
										"name": "id",
										"type": "uint256"
									},
									{
										"internalType": "address",
										"name": "_address",
										"type": "address"
									},
									{
										"internalType": "string",
										"name": "name",
										"type": "string"
									},
									{
										"internalType": "string",
										"name": "surname",
										"type": "string"
									}
								],
								"internalType": "struct ESSM.Professor",
								"name": "lecturer",
								"type": "tuple"
							},
							{
								"components": [
									{
										"internalType": "uint256",
										"name": "id",
										"type": "uint256"
									},
									{
										"internalType": "string",
										"name": "subjectName",
										"type": "string"
									},
									{
										"internalType": "uint256",
										"name": "ects",
										"type": "uint256"
									}
								],
								"internalType": "struct ESSM.Subject",
								"name": "subject",
								"type": "tuple"
							}
						],
						"internalType": "struct ESSM.Course",
						"name": "course",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "id",
								"type": "uint256"
							},
							{
								"internalType": "string",
								"name": "name",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "surname",
								"type": "string"
							}
						],
						"internalType": "struct ESSM.Student",
						"name": "student",
						"type": "tuple"
					},
					{
						"internalType": "uint256",
						"name": "grade",
						"type": "uint256"
					}
				],
				"internalType": "struct ESSM.Grade[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getCoursesById",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "id",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "_address",
								"type": "address"
							},
							{
								"internalType": "string",
								"name": "name",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "surname",
								"type": "string"
							}
						],
						"internalType": "struct ESSM.Professor",
						"name": "lecturer",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "id",
								"type": "uint256"
							},
							{
								"internalType": "string",
								"name": "subjectName",
								"type": "string"
							},
							{
								"internalType": "uint256",
								"name": "ects",
								"type": "uint256"
							}
						],
						"internalType": "struct ESSM.Subject",
						"name": "subject",
						"type": "tuple"
					}
				],
				"internalType": "struct ESSM.Course",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCoursesByProfessor",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "id",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "_address",
								"type": "address"
							},
							{
								"internalType": "string",
								"name": "name",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "surname",
								"type": "string"
							}
						],
						"internalType": "struct ESSM.Professor",
						"name": "lecturer",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "id",
								"type": "uint256"
							},
							{
								"internalType": "string",
								"name": "subjectName",
								"type": "string"
							},
							{
								"internalType": "uint256",
								"name": "ects",
								"type": "uint256"
							}
						],
						"internalType": "struct ESSM.Subject",
						"name": "subject",
						"type": "tuple"
					}
				],
				"internalType": "struct ESSM.Course[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getGradeById",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "id",
								"type": "uint256"
							},
							{
								"components": [
									{
										"internalType": "uint256",
										"name": "id",
										"type": "uint256"
									},
									{
										"internalType": "address",
										"name": "_address",
										"type": "address"
									},
									{
										"internalType": "string",
										"name": "name",
										"type": "string"
									},
									{
										"internalType": "string",
										"name": "surname",
										"type": "string"
									}
								],
								"internalType": "struct ESSM.Professor",
								"name": "lecturer",
								"type": "tuple"
							},
							{
								"components": [
									{
										"internalType": "uint256",
										"name": "id",
										"type": "uint256"
									},
									{
										"internalType": "string",
										"name": "subjectName",
										"type": "string"
									},
									{
										"internalType": "uint256",
										"name": "ects",
										"type": "uint256"
									}
								],
								"internalType": "struct ESSM.Subject",
								"name": "subject",
								"type": "tuple"
							}
						],
						"internalType": "struct ESSM.Course",
						"name": "course",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "id",
								"type": "uint256"
							},
							{
								"internalType": "string",
								"name": "name",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "surname",
								"type": "string"
							}
						],
						"internalType": "struct ESSM.Student",
						"name": "student",
						"type": "tuple"
					},
					{
						"internalType": "uint256",
						"name": "grade",
						"type": "uint256"
					}
				],
				"internalType": "struct ESSM.Grade",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getProfessorById",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "_address",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "surname",
						"type": "string"
					}
				],
				"internalType": "struct ESSM.Professor",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getStudentById",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "surname",
						"type": "string"
					}
				],
				"internalType": "struct ESSM.Student",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getSubjectById",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "subjectName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "ects",
						"type": "uint256"
					}
				],
				"internalType": "struct ESSM.Subject",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]; // Add Your Contract ABI here!!!

  const contractAddress = '0x1BE356ba2e4E12E87B21119EF513F950e2C4Fda8'; // Add Your Contract address here!!!

  const contract = new web3.eth.Contract(contractAbi, contractAddress);
  export default contract