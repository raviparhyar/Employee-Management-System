const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Complete Sales Report",
          "taskDescription": "Prepare and submit the sales report for Q4.",
          "taskDate": "2024-12-10",
          "category": "Reporting",
          "activeTask": true,
          "newTask": false,
          "completedTask": false,
          "failedTask": false
        },
        {
          "taskTitle": "Update Client Database",
          "taskDescription": "Ensure all client records are updated in the CRM.",
          "taskDate": "2024-12-15",
          "category": "Data Management",
          "activeTask": false,
          "newTask": true,
          "completedTask": false,
          "failedTask": false
        },
        {
          "taskTitle": "Team Meeting Preparation",
          "taskDescription": "Prepare slides for the weekly team meeting.",
          "taskDate": "2024-12-08",
          "category": "Meetings",
          "activeTask": false,
          "newTask": false,
          "completedTask": true,
          "failedTask": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Onboarding New Hire",
          "taskDescription": "Assist the new team member with onboarding.",
          "taskDate": "2024-12-07",
          "category": "HR",
          "activeTask": true,
          "newTask": false,
          "completedTask": false,
          "failedTask": false
        },
        {
          "taskTitle": "Review Marketing Campaign",
          "taskDescription": "Evaluate the recent digital marketing campaign performance.",
          "taskDate": "2024-12-12",
          "category": "Marketing",
          "activeTask": false,
          "newTask": true,
          "completedTask": false,
          "failedTask": false
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Fix Backend Bug",
          "taskDescription": "Resolve the issue in the backend API causing delays.",
          "taskDate": "2024-12-09",
          "category": "Development",
          "activeTask": true,
          "newTask": false,
          "completedTask": false,
          "failedTask": false
        },
        {
          "taskTitle": "Database Optimization",
          "taskDescription": "Optimize database queries for better performance.",
          "taskDate": "2024-12-14",
          "category": "IT",
          "activeTask": false,
          "newTask": true,
          "completedTask": false,
          "failedTask": false
        },
        {
          "taskTitle": "Update API Documentation",
          "taskDescription": "Document the recent updates to the APIs.",
          "taskDate": "2024-12-11",
          "category": "Documentation",
          "activeTask": false,
          "newTask": false,
          "completedTask": true,
          "failedTask": false
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Design Website Mockup",
          "taskDescription": "Create a mockup for the client website redesign.",
          "taskDate": "2024-12-08",
          "category": "Design",
          "activeTask": true,
          "newTask": false,
          "completedTask": false,
          "failedTask": false
        },
        {
          "taskTitle": "Prepare Presentation",
          "taskDescription": "Prepare slides for the client pitch meeting.",
          "taskDate": "2024-12-09",
          "category": "Presentation",
          "activeTask": false,
          "newTask": true,
          "completedTask": false,
          "failedTask": false
        },
        {
          "taskTitle": "Review Project Plan",
          "taskDescription": "Provide feedback on the proposed project plan.",
          "taskDate": "2024-12-13",
          "category": "Planning",
          "activeTask": false,
          "newTask": false,
          "completedTask": false,
          "failedTask": true
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Client Follow-Up",
          "taskDescription": "Follow up with clients for pending feedback.",
          "taskDate": "2024-12-10",
          "category": "Communication",
          "activeTask": true,
          "newTask": false,
          "completedTask": false,
          "failedTask": false
        },
        {
          "taskTitle": "Inventory Audit",
          "taskDescription": "Complete the monthly inventory check.",
          "taskDate": "2024-12-15",
          "category": "Audit",
          "activeTask": false,
          "newTask": true,
          "completedTask": false,
          "failedTask": false
        },
        {
          "taskTitle": "Update Vendor List",
          "taskDescription": "Ensure the vendor list is up to date with contact information.",
          "taskDate": "2024-12-11",
          "category": "Admin",
          "activeTask": false,
          "newTask": false,
          "completedTask": true,
          "failedTask": false
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];

  export const setLocalStorage = () => {
    localStorage.setItem("employees",JSON.stringify(employees) )
    localStorage.setItem("admin",JSON.stringify(admin) )
  }

  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return {employees, admin}
    
  }