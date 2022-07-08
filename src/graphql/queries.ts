/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReservation = /* GraphQL */ `
  query GetReservation($id: ID!) {
    getReservation(id: $id) {
      id
      date
      menu
      stylistId
      customerId
      createdAt
      updatedAt
    }
  }
`;
export const listReserves = /* GraphQL */ `
  query ListReservations(
    $filter: ModelReservationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReservations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        menu
        stylistId
        customerId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMenu = /* GraphQL */ `
  query GetMenu($id: ID!) {
    getMenu(id: $id) {
      id
      menu
      amountOfMoney
      treatmentTime
      createdAt
      updatedAt
    }
  }
`;
export const listMenus = /* GraphQL */ `
  query ListMenus(
    $filter: ModelMenuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        menu
        amountOfMoney
        treatmentTime
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStylist = /* GraphQL */ `
  query GetStylist($id: ID!) {
    getStylist(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listStylists = /* GraphQL */ `
  query ListStylists(
    $filter: ModelStylistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStylists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      id
      name
      mail
      createdAt
      updatedAt
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        mail
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTest = /* GraphQL */ `
  query GetTest($id: ID!) {
    getTest(id: $id) {
      id
      createdAt
      updatedAt
    }
  }
`;
export const listTests = /* GraphQL */ `
  query ListTests(
    $filter: ModelTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getHoliday = /* GraphQL */ `
  query GetHoliday($id: ID!) {
    getHoliday(id: $id) {
      id
      date
      createdAt
      updatedAt
    }
  }
`;
export const listHolidays = /* GraphQL */ `
  query ListHolidays(
    $filter: ModelHolidayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHolidays(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
