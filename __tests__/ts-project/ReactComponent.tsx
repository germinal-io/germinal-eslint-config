import * as React from 'react'

function FunctionComponent(props: {
  onPress: () => void
  onLongPress: () => void
}) {
  return null
}

type ReactComponentProps = {
  foo: boolean
}

type ReactComponentState = {
  fooState: boolean
}

export class MarkupView extends React.PureComponent<
  ReactComponentProps,
  ReactComponentState
> {
  state: ReactComponentState = {
    fooState: false,
  }

  componentDidMount(): void {}

  componentDidUpdate(
    previousProps: ReactComponentProps,
    previousState: ReactComponentState
  ): void {}

  private handlePress = () => null

  render(): React.ReactNode {
    return this.state.fooState ? (
      <FunctionComponent onLongPress={() => null} onPress={this.handlePress} />
    ) : null
  }
}
