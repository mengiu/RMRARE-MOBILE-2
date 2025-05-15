export class Documento {

    constructor(
        public _idDocumento: number | null = null,
        public codiceTipoDocumento: string = '',
        public codicePresidio: string = '',
        public descrizionePresidio: string = '',
        public codiceEsenzione: string = '',
        public descrizioneEsenzione: string = '',
        public codiceFiscalePaziente: string = '',
        public dataCompilazione: string = '',
        public cognomeNomePrescrittore: string = '',
        public statoDocumento: string = '',
        public codiceFiscalePrescrittore: string = '',
        ) {
    }
}