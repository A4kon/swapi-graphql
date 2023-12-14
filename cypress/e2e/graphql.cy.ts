import { generateMockFilm } from './mocks/films.mock';

// TODO: just happy path, rest of test will be similar
describe('GraphQL E2E Tests', () => {
  it('should test happy path for getting film by id', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/graphql',
      body: {
        query: `
          query GetFilmById($id: Int!) {
            getFilmById(id: $id) {
              id
              title
              episode_id
              opening_crawl
              director
              producer
              release_date
              species
              starships
              vehicles
              characters
              planets
              url
              created
              edited
            }
          }
        `,
        variables: {
          id: 1,
        },
      },
    }).then((response) => {
      expect(response.status).to.equal(200);

      expect(response.body.data).to.deep.equal({
        getFilmById: generateMockFilm(),
      });
    });
  });
});
