const loginFields=[
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email-address",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    }
]
const signupFields=[
    {
        labelText: "Full Name",
        labelFor: "full-name",
        id: "full-name",
        name: "full-name",
        type: "text",
        autoComplete: "name",
        isRequired: true,
        placeholder: "Full Name"

    },

    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email-address",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"
        
    },

    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"new-password",
        isRequired:true,
        placeholder:"Password"

    },
]
export {loginFields,signupFields}
