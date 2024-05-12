
export const DependencyWaitTimeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF914D" stroke="#0C1C3E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );

  export const ManualStubCreationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF914D" stroke="#0C1C3E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" />
      <polygon points="18 2 22 6 12 16 8 16 8 12 18 2" />
    </svg>
  );

  export const DataVariabilityConcernsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF914D" stroke="#0C1C3E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
      <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );

  export const ErrorHandlingChallengesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF914D" stroke="#0C1C3E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );

  export const ScalabilityTestingDifficultiesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF914D" stroke="#0C1C3E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6l3 6h12l3-6" />
      <path d="M3 18l3-6h12l3 6" />
      <line x1="12" y1="3" x2="12" y2="21" />
    </svg>
  );


export const featuresData = [
    {
      title: 'Generate test cases by codeless integration',
      icon:<DependencyWaitTimeIcon />,
      description: 'Seamlessly integrate Keploy with your dev-setup for automated test and data-mock generation in just 2 minutes, eliminating the need for complex setup or coding knowledge.',
    },
    {
      title: 'Automated tests in simple yaml',
      icon: <ManualStubCreationIcon />,
      description: "With zero learning curve, Keploy's native integration allows developers to dynamically generate test cases by simply recording and replaying interactions, enhancing efficiency and productivity.",
    },
    {
      title: 'CI/CD Compatibility',
      icon: <ScalabilityTestingDifficultiesIcon />,
      description: 'Ensure compatibility with any CI/CD pipeline by generating test cases for all languages and frameworks without the requirement for extensive coding knowledge or setup',
    },
    {
      title: 'Zero-Code Change',
      icon: <DataVariabilityConcernsIcon />,
      description: 'Keploy empowers developers to scale automated test coverage without writing complex code, enabling teams to focus on delivering high-quality software with confidence.',
    },
    {
      title: 'Enhanced Test Coverage',
      icon: <ErrorHandlingChallengesIcon />,
      description: "Combine Keploy's test coverage with existing unit tests to provide comprehensive testing reports, boosting teams' confidence in their testing strategies and ensuring robust software delivery.",
    }
  ];
  export const faqQuestions =[
    {
      title: "What is Codeless integration?",
      answer:
        "Native integration refers to the seamless connection of one system or application with another, typically utilizing the built-in features or interfaces provided by those systems. Keploy is designed to natively support Docker/Kubernetes environments. This means to generate/record tests, you will need to install Docker and run your application on it.",
    },
    {
      title: "How can I combine my Keploy tests with frameworks like pyTest or Jest ?",
      answer:
        "You can merge tests generated by Keploy with your existing unit-test whether they are pyTest or Jest using language based SDK in your test file. Combining Keploy's test coverage with existing unit test coverage can increase the overall coverage in testing reports, helping in ensuring robust software delivery and enhancing overall product quality.",
    },
    {
      title: "How does Keploy contribute to overall software delivery?",
      answer:
        "By streamlining testing processes, providing developer-friendly solutions, and enhancing test coverage, Keploy accelerates software delivery, ensuring robust and high-quality products reach the market efficiently.",
    },
    {
      title: "What makes Keploy's integration developer-friendly?",
      answer:
        "Keploy offers a zero learning curve with its native integration, allowing developers to dynamically generate test cases by recording and replaying interactions, thus enhancing efficiency and productivity.",
    },
    {
      title: "What sets Keploy apart as an automated testing software?",
      answer:"Keploy stands out as an automated testing software due to its zero-code platform and native integration capabilities. It simplifies the testing process by allowing developers to generate test cases effortlessly, thus enhancing efficiency and productivity."
    },
    {
      title: "How does Keploy contribute to improving unit test coverage?",
      answer:
        "By providing a zero code platform for automated testing, Keploy empowers developers to scale up their unit test coverage without extensive coding knowledge. This integration enhances testing reports, ultimately boosting confidence in the product's quality.",
    },
    {
      title: "What is Keploy's approach to unit test coverage?",
      answer:"Keploy offers a comprehensive solution to unit test coverage by seamlessly integrating with existing unit tests. It allows developers to merge Keploy-generated tests with their current unit tests, enhancing overall coverage and ensuring robust software delivery."
    },
    {
      title: "How does Keploy support Continuous Integration (CI) processes?",
      answer:"Keploy ensures compatibility with any CI/CD pipeline by generating test cases for all languages and frameworks. This seamless integration streamlines the testing process within the CI workflow, enabling efficient software delivery."
    },
    {
      title: "Can Keploy help in setting up automated testing within CI pipelines?",
      answer:
        "Absolutely, Keploy's native integration eliminates the need for extensive setup or coding knowledge, making it easy to incorporate automated testing into CI pipelines. Developers can integrate Keploy with their existing CI tools and start generating test cases without hassle.",
    }
  ]

  