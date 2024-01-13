INSERT INTO ticket (
    TicketID,
    Name,
    DeviceType,
    DeviceMake,
    DeviceModel,
    IssueDescription,
    Passcode,
    ExpectedCompletion,
    ContactInfo,
    IMEISerial,
    PhoneCarrier,
    SelectedFunctions,
    CustomerID,
    TechnicianID
  )
VALUES (
    TicketID:int,
    'Name:varchar',
    'DeviceType:varchar',
    'DeviceMake:varchar',INSERT INTO customers (id, name, email, phone, address)
    VALUES (
        id:int,
        'name:varchar',
        'email:varchar',
        'phone:varchar',
        'address:varchar'
      );
    'DeviceModel:varchar',
    'IssueDescription:text',
    'Passcode:varchar',
    'ExpectedCompletion:date',
    'ContactInfo:varchar',
    'IMEISerial:varchar',
    'PhoneCarrier:varchar',
    'SelectedFunctions:text',
    'CustomerID:varchar',
    'TechnicianID:varchar'
  );