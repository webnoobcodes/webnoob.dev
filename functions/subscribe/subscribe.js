const fetch = require('node-fetch'); 
const base64 = require('base-64'); 

exports.handler = async (event, context) => { 
  // Only allow POST
  if (event.httpMethod !== 'POST') { 
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  const errorGen = msg => {
    return { statusCode: 500, body: msg }; 
  }; 
  try { 
    const { email } = JSON.parse(event.body);
    if (!email) { 
      return errorGen('Missing Email');
    } 
    const subscriber = { 
      email_address: email, 
      status: 'subscribed', 
    };
    const creds = `any:${process.env.MAILCHIMP_KEY}`;
    const response = await fetch('https://us4.api.mailchimp.com/3.0/lists/74fdaf045e/members/', { 
      method: 'POST', 
      headers: { 
        Accept: '*/*', 
        'Content-Type': 'application/json', 
        Authorization: `Basic ${base64.encode(creds)}`, }, 
      body: JSON.stringify(subscriber), 
    }); 
    const data = await response.json();
    
    if (!response.ok) { 
      // NOT res.status >= 200 && res.status < 300 
      return { statusCode: data.status, body: data.detail }; 
    }
    return { 
      statusCode: 200, 
      body: JSON.stringify({ msg: "You've signed up to the mailing list!", detail: data, }), 
    }; 
  } catch (err) { 
    console.log(err); // output to netlify function log 
    return { 
      statusCode: 500, 
      body: JSON.stringify({ msg: err.message }),
    };
  } 
};