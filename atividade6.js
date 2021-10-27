// Employees Object List
employees = [
    {
      id: 11,
      name: "joao da silva",
      cpf: "111.222.333-44",
      category: "tecnico",
    },
    {
      id: 22,
      name: "joana da silva",
      cpf: "111.222.333-55",
      category: "tecnico",
    },
    {
      id: 23,
      name: "joana da Mata",
      cpf: "111.222.333-66",
      category: "analista",
    },
    {
      id: 24,
      name: "joana da Mata",
      cpf: "23456789-00",
      category: "gerente",
    },
    {
      id: 45,
      name: "joana da Mata",
      cpf: "111222333-44",
      category: "gerente",
    },
    {
      id: 36,
      name: "joana da Mata",
      cpf: "654321987-23",
      category: "gerente",
    },
    {
      id: 27,
      name: "joana da Mata",
      cpf: "098876654-99",
      category: "gerente",
    },
  ];
  
  //retorna apenas os gerentes
  gerentes = employees.filter((employee) => employee.category === "gerente");
  console.log(gerentes);
  