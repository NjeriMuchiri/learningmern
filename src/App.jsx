           const ContentNode = document.getElementById('contents');
           const continents = ['Africa','America','Asia','Australia','Europe'];
           const message = continents.map(c => `Hello ${c}!`).join(' ')
            const component = <p className="header">{message}</p>
            ReactDOM.render(component,ContentNode);