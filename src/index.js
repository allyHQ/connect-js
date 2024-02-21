class AllyConnect{

    constructor(appId){
        this.appId = appId;
        this.url = "https://connect.ally.wtf";
        this.appUrl = `${this.url}/${this.appId}`;
        this.containerId = 'iframe-container';
        this.callbacks = {};
        this.callbacks["close"] = (data) => {
            document.getElementById(this.containerId).remove();
        }
    }

    openWidget(){
        var iframe = document.createElement('iframe');
        var iframeContainer = document.createElement('div');
        iframeContainer.id = this.containerId;

        document.body.appendChild(iframeContainer);

        iframe.src = this.appUrl;
        iframe.id = 'ally-connect';


        var style = document.createElement('style');
            style.textContent = `
            #ally-connect {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border: none;
                background-color: transparent;
            }
        `;
        

        document.getElementById('iframe-container').appendChild(iframe);
        document.head.appendChild(style);
        iframeContainer.appendChild(iframe);

        let self = this;

        window.addEventListener('message', function(event) {
            self.handleEvent(event.data);
        });
    }

    handleEvent(event){
        let selected_event = event.type.split('.');
        selected_event = selected_event[selected_event.length - 1];
        
        let callback = this.callbacks[selected_event];
        if(callback){
            callback(event.data);
        }
    }

    on(event, callback){
        this.callbacks[event] = callback;
    }
}

export default AllyConnect;