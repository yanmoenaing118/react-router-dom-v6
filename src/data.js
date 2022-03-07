let invoices = [
    {
      name: "Santa Monica",
      number: 1995,
      amount: "$10,800",
      due: "12/05/1995",
    },
    {
      name: "Stankonia",
      number: 2000,
      amount: "$8,000",
      due: "10/31/2000",
    },
    {
      name: "Ocean Avenue",
      number: 2003,
      amount: "$9,500",
      due: "07/22/2003",
    },
    {
      name: "Tubthumper",
      number: 1997,
      amount: "$14,000",
      due: "09/01/1997",
    },
    {
      name: "Wide Open Spaces",
      number: 1998,
      amount: "$4,600",
      due: "01/27/1998",
    },
  ];
  
  export function getInvoices() {
    return invoices;
  }


  export function getInvoice(number) {
    return invoices.find(
      (invoice) => invoice.number === number
    );
  }



  export const images = [
    "https://images.unsplash.com/photo-1638913658179-18c9a9c943f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1646431301926-785a5e3d2539?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1646452663106-06c910246222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1646454073711-7f170ecd4076?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1646426703387-8faeed1d82b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1640622659787-d15655c3a2ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1646422915678-ac3b6a4ed763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1646461377690-2b76d9f11958?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1646335940131-0e25ade32348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1646408271576-bf925295d130?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1629036940204-960cf1c26ea7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
  ]