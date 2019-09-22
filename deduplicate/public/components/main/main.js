import React from 'react';
import {
  EuiPage,
  EuiPageHeader,
  EuiTitle,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentHeader,
  EuiPageContentBody,
  EuiText,
  EuiButton,
  EuiFieldText
} from '@elastic/eui';

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /*
       FOR EXAMPLE PURPOSES ONLY.  There are much better ways to
       manage state and update your UI than this.
    */
    const { httpClient } = this.props;
    httpClient.get('../api/deduplicate/example').then((resp) => {
      this.setState({ time: resp.data.time });
    });
  }
  render() {
    const { title } = this.props;
    
    const userAction = async (varIndexPattern) => {
      console.log(varIndexPattern);
      const response = await fetch('http://localhost:5000/hello/'+varIndexPattern);
      const myJson = await response.json();
    }

    return (
      <EuiPage>
        <EuiPageBody>
          <EuiPageHeader>
            <EuiTitle size="l">
              <h1>
                Remove Duplicate Docs
              </h1>
            </EuiTitle>
          </EuiPageHeader>
          <EuiPageContent>
            <EuiPageContentHeader>
              <EuiTitle>
                <h2>
                    Index Wildcard Pattern to check duplicate docs
                </h2>
              </EuiTitle>
            </EuiPageContentHeader>
            <EuiPageContentBody>
              <EuiFieldText
                id="indexPattern"
                placeholder="Wildcard Index Pattern (eg. *staging*)"
                value={this.state.value}
                onChange={this.onChange}
              />
              <br/><br/>
              <EuiButton onClick={() => userAction(document.getElementById("indexPattern").value) }>
                Get List of Indices
              </EuiButton>
            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    );
  }
}
