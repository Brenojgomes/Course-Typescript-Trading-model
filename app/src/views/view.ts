export abstract class View<T> {

    protected elemento: HTMLElement;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean ) {
        this.elemento.innerHTML = seletor;
        if(escapar){
            this.escapar = escapar;
        }
    }


    update(model: T): void{
        let template = this.template(model);
        if(this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');

        }
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;

}