export const nodes = [
    {
      id: 'service-1',
      name: 'Order Service',
      port: '8080',
      namespace: 'order-namespace',
      cluster: 'cluster-1',
      invocations: 1000,
      errorRatio: 0.1, // 10% errors
      type: 'HTTP',
    },
    {
      id: 'service-2',
      name: 'Payment Service',
      port: '8081',
      namespace: 'payment-namespace',
      cluster: 'cluster-1',
      invocations: 1200,
      errorRatio: 0.05, // 5% errors
      type: 'gRPC',
    },
    {
      id: 'service-3',
      name: 'User Service',
      port: '8082',
      namespace: 'user-namespace',
      cluster: 'cluster-2',
      invocations: 900,
      errorRatio: 0.02, // 2% errors
      type: 'MySQL',
    },
    {
      id: 'service-4',
      name: 'Inventory Service',
      port: '8083',
      namespace: 'inventory-namespace',
      cluster: 'cluster-2',
      invocations: 1100,
      errorRatio: 0.08, // 8% errors
      type: 'Redis',
    },
    {
      id: 'service-5',
      name: 'Shipping Service',
      port: '8084',
      namespace: 'shipping-namespace',
      cluster: 'cluster-1',
      invocations: 800,
      errorRatio: 0.12, // 12% errors
      type: 'HTTP',
    },
    {
      id: 'service-6',
      name: 'Notification Service',
      port: '8085',
      namespace: 'notification-namespace',
      cluster: 'cluster-3',
      invocations: 600,
      errorRatio: 0.03, // 3% errors
      type: 'gRPC',
    },
    {
      id: 'service-7',
      name: 'Auth Service',
      port: '8086',
      namespace: 'auth-namespace',
      cluster: 'cluster-2',
      invocations: 1400,
      errorRatio: 0.07, // 7% errors
      type: 'MySQL',
    },
    {
      id: 'service-8',
      name: 'Analytics Service',
      port: '8087',
      namespace: 'analytics-namespace',
      cluster: 'cluster-3',
      invocations: 950,
      errorRatio: 0.09, // 9% errors
      type: 'Redis',
    },
    {
      id: 'service-9',
      name: 'Logging Service',
      port: '8088',
      namespace: 'logging-namespace',
      cluster: 'cluster-3',
      invocations: 500,
      errorRatio: 0.04, // 4% errors
      type: 'HTTP',
    },
    {
      id: 'service-10',
      name: 'Cache Service',
      port: '8089',
      namespace: 'cache-namespace',
      cluster: 'cluster-2',
      invocations: 1300,
      errorRatio: 0.06, // 6% errors
      type: 'gRPC',
    },
    {
      id: 'service-11',
      name: 'Email Service',
      port: '8090',
      namespace: 'email-namespace',
      cluster: 'cluster-3',
      invocations: 400,
      errorRatio: 0.1, // 10% errors
      type: 'HTTP',
    },
    {
      id: 'service-12',
      name: 'SMS Service',
      port: '8091',
      namespace: 'sms-namespace',
      cluster: 'cluster-3',
      invocations: 450,
      errorRatio: 0.05, // 5% errors
      type: 'gRPC',
    },
    {
      id: 'service-13',
      name: 'Recommendation Service',
      port: '8092',
      namespace: 'recommendation-namespace',
      cluster: 'cluster-2',
      invocations: 700,
      errorRatio: 0.07, // 7% errors
      type: 'MySQL',
    },
    {
      id: 'service-14',
      name: 'Search Service',
      port: '8093',
      namespace: 'search-namespace',
      cluster: 'cluster-1',
      invocations: 1000,
      errorRatio: 0.02, // 2% errors
      type: 'Redis',
    },
    {
      id: 'service-15',
      name: 'Billing Service',
      port: '8094',
      namespace: 'billing-namespace',
      cluster: 'cluster-2',
      invocations: 850,
      errorRatio: 0.08, // 8% errors
      type: 'HTTP',
    },
  ];
  
  export const edges = [
    {
      source: 'service-1',
      target: 'service-9',
      invocations: 500,
      latency: '100ms',
    },
    {
      source: 'service-1',
      target: 'service-6',
      invocations: 300,
      latency: '200ms',
    },
    {
      source: 'service-2',
      target: 'service-11',
      invocations: 700,
      latency: '150ms',
    },
    {
      source: 'service-3',
      target: 'service-7',
      invocations: 250,
      latency: '250ms',
    },
    {
      source: 'service-4',
      target: 'service-10',
      invocations: 400,
      latency: '50ms',
    },
    {
      source: 'service-5',
      target: 'service-12',
      invocations: 600,
      latency: '300ms',
    },
    {
      source: 'service-6',
      target: 'service-2',
      invocations: 350,
      latency: '400ms',
    },
    {
      source: 'service-7',
      target: 'service-13',
      invocations: 450,
      latency: '250ms',
    },
    {
      source: 'service-8',
      target: 'service-2',
      invocations: 500,
      latency: '150ms',
    },
    {
      source: 'service-9',
      target: 'service-4',
      invocations: 150,
      latency: '300ms',
    },
    {
      source: 'service-10',
      target: 'service-8',
      invocations: 600,
      latency: '350ms',
    },
    {
      source: 'service-11',
      target: 'service-7',
      invocations: 200,
      latency: '400ms',
    },
    {
      source: 'service-12',
      target: 'service-1',
      invocations: 350,
      latency: '450ms',
    },
    {
      source: 'service-13',
      target: 'service-6',
      invocations: 450,
      latency: '200ms',
    },
    {
      source: 'service-5',
      target: 'service-1',
      invocations: 550,
      latency: '250ms',
    },
  ];
  