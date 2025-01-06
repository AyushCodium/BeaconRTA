const faqData = {
    categories: [
      {
        id: "shares-securities",
        title: "Shares & Other Securities",
        sections: [
          {
            id: "kyc",
            title: "KYC Compliance",
            questions: [
              {
                id: "kyc-1",
                question: "How can I make my folio KYC Compliant?",
                answer: `SEBI has mandated the furnishing of PAN, Address with PIN code, Email address, Mobile No., Bank Account details, Specimen Signature & Nomination by holders of physical securities. The relevant Forms for registering/changing KYC details and Nomination are available on our website.`
              }
            ]
          },
          {
            id: "transfer",
            title: "Transfer",
            questions: [
              {
                id: "transfer-1",
                question: "Can I transfer physical securities to my name?",
                answer: `As per SEBI circular dated 27th March 2019, w.e.f. April 01, 2019 fresh requests for effecting transfer of securities shall not be processed unless the securities are held in dematerialized form with a depository.`
              }
            ]
          },
          {
            id: "nomination",
            title: "Nomination",
            questions: [
              {
                id: "nomination-1",
                question: "Can I avail of the nomination facility?",
                answer: `Yes, you can. For KYC compliant folio, you may nominate person(s) by completing Form No.SH-13 and registering the same with us.`
              },
              {
                id: "nomination-2",
                question: "Can I cancel or nominate someone else in place of existing nominee?",
                answer: `Yes, you can. For KYC compliant folio, you may vary or cancel the nomination and nominate new person(s) in place of the existing nominee(s) by completing Form No. SH-14.`
              }
            ]
          }
        ]
      },
      {
        id: "bonds",
        title: "Bonds",
        sections: [
          {
            id: "bonds-general",
            title: "General Information",
            questions: [
              {
                id: "bonds-1",
                question: "What is a Bond / Debenture?",
                answer: `A Bond / Debenture is a debt instrument where the issuer of the security agrees to repay the investor, the amount borrowed and interest, over a specified period of time.`
              },
              {
                id: "bonds-2",
                question: "What is Coupon / Interest?",
                answer: `Coupon / Interest is the cash flow that is offered by a particular security at fixed intervals / predefined dates. The coupon expressed as a percentage of the face value of the security gives the coupon rate.`
              }
            ]
          }
        ]
      },
      {
        id: "ipo",
        title: "IPO",
        sections: [
          {
            id: "ipo-general",
            title: "General Information",
            questions: [
              {
                id: "ipo-1",
                question: "What is an IPO?",
                answer: `The first public offer of shares made by a company is called an Initial Public Offer (IPO). An IPO is made by a company whose shares are not listed on a stock exchange.`
              },
              {
                id: "ipo-2",
                question: "What is ASBA?",
                answer: `Applications Supported by Blocked Amount (ASBA) is a method developed by SEBI to block the funds for Initial Public Offer (IPO), Rights issue, Follow-on Public Offer (FPO) etc., applications.`
              }
            ]
          }
        ]
      }
    ]
  };
  
  export default faqData;