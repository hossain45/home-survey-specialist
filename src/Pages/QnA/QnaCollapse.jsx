
import { Collapse } from "antd";

const items = [
  {
    key: "1",
    label: "What happens after I have registered with Home Surveys Specialist?",
    children: (
      <p>
        Once you have register with us, we will contact the agent selling the
        property and set up an appointment. You will have access to online
        customer portal where you can view and download: <br />
        <ul className="list-disc pl-4">
          <li>Our Terms of Engagement</li>
          <li>Invoice</li>
          <li>The Report when it is ready</li>
        </ul>
      </p>
    ),
  },
  {
    key: "2",
    label: "Can I raise any concerns to the surveyor?",
    children: (
      <p>
        Our qualified and friendly team will be happy to listen to your concerns
        or specific matters of interest about the property before the inspection
        takes place. Your concerns will be raised with our surveyor who will
        then address them and plan the inspection and survey the property
        accordingly.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can I accompany the surveyor?",
    children: (
      <p>
        Unfortunately, it is not possible to accompany the surveyor during the
        inspection. In fact, it is in your interest that the surveyor can focus
        to provide you with a professional and high standard of service without
        any biasness.
      </p>
    ),
  },
  {
    key: "4",
    label: "How long will I have to wait for the report?",
    children: (
      <p>
        We aim to get the report to you within 5 working days from the
        inspection. Depending on the size and construction of the property we
        may even you give the report sooner.
      </p>
    ),
  },
  {
    key: "5",
    label: "How will the report be sent to me?",
    children: (
      <p>
        Once your report is complete, will contact you and email you with the
        links on our client area. Your report will be viable online for you to
        view and download.
      </p>
    ),
  },
  {
    key: "6",
    label: "What happens if I need to reschedule or cancel the appointment?",
    children: (
      <p>
        Our customer service team strive for your satisfaction, we are flexible
        and be happy to reschedule the property inspection to another date at
        your convenience free of charge.
      </p>
    ),
  },
  {
    key: "7",
    label:
      "How do I pay and do I need to pay before or after the report is complete?",
    children: (
      <p>
        You can make payment when you book a survey or after agreeing to our
        terms of service. We will email you the details of how to make the
        payment. We require payment of in full prior to the inspection.
      </p>
    ),
  },
  {
    key: "8",
    label: "How do I get in touch about my report?",
    children: (
      <p>
        We will be happy to take any queries or discuss with you any concerns
        after you have received the report. Please get in touch via email at
        <span className="text-[#991e14] px-1 font-bold">
          enquiries@homesurveysspecialist.co.uk
        </span>
        Or call us on
        <span className="text-[#991e14] pl-1 font-bold">07898 232710</span> .
      </p>
    ),
  },
];
const QnaCollapse = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <Collapse className="max-w-7xl mx-auto px-2 my-10 md:my-16 lg:my-20" items={items} defaultActiveKey={["1"]} onChange={onChange} />
  );
};

export default QnaCollapse