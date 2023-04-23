import { DuckShootLotto } from "../duck-shoot-lotto";

describe("DuckShootLotto game component", () => {
  it("should render a default board", () => {
    const containerDefaultBoard = (): JSX.Element => <DuckShootLotto />;
    expect(containerDefaultBoard).toMatchSnapshot();
  });
});
