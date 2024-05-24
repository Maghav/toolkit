import { ReactNode } from "react";

async function WhoisPage() {
    const domain:string="onl9.club"
    const url = `https://zozor54-whois-lookup-v1.p.rapidapi.com/?domain=${domain}&format=json&_forceRefresh=0`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '28bf252a9emsh1342c49e99da62bp14e7fejsn4fe6e179549d',
            'X-RapidAPI-Host': 'zozor54-whois-lookup-v1.p.rapidapi.com'
        }
    };
        const whois:any = await fetch(url, options).then((res) => res.json());

        return (
        <div>
          <h1>Whois Checker</h1>
          Domain Name: {whois.name}<br/>
          Registrar:<br/>          
          Registrar Whois Server:
          Updated Date:
          Creation Date: 
          Expiry Date: 
          Registrar IANA:
          Registrar Abuse Contact Phone:
          Registrar Abuse Email:
          Domain Status:
          Registry Registrant ID:
          Registrant Name:
          Registrant Organization:
          Registrant Address:
          Registrant City:
          Registrant State/Province:
          Registrant Postal Code:
          Registrant Country:
          Registrant Phone:
          Registrant Phone Ext:
          Registrant Fax: 
          Registrant Fax Ext:
          Registrant Email:
          Registry Admin ID:
          Admin Name:
          Admin Organization:
          Admin Street: 
          Admin Street:
          Admin Street:
          Admin City: 
          Admin State/Province: 
          Admin Postal Code: 
          Admin Country: 
          Admin Phone: 
          Admin Phone Ext:
          Admin Fax:
          Admin Fax Ext: 
          Admin Email: 
          Registry Tech ID: 
          Tech Name: 
          Tech Organization: 
          Tech Street: 
          Tech Street: 
          Tech Street: 
          Tech City: 
          Tech State/Province: 
          Tech Postal Code: 
          Tech Country: 
          Tech Phone:
          Tech Phone Ext: 
          Tech Fax: 
          Tech Fax Ext: 
          Tech Email: 
          Name Server:
          Name Server: 

        </div>
      )
        
}
export default WhoisPage