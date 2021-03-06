import { Recognizer, RecognizerResult } from '../recognizer'
import {
    Date, 
    Point, 
    Quadrilateral,
    MrtdDocumentType, 
    MrzResult, 
    EudlCountry, 
    DocumentFaceDetectorType,
    ImageExtensionFactors,
} from '../types'

/**
 * Result object for MalaysiaMyKadBackRecognizer.
 */
export class MalaysiaMyKadBackRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The Date Of Birth of the MyKad owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The Extended NRIC of the MyKad owner. 
         */
        this.extendedNric = nativeResult.extendedNric;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The NRIC of the MyKad owner. 
         */
        this.nric = nativeResult.nric;
        
        /** 
         * The old NRIC of the MyKad owner. 
         */
        this.oldNric = nativeResult.oldNric;
        
    }
}

/**
 * Class for configuring Kad Back Recognizer.
 * 
 * MyKadBack recognizer is used for scanning back side of MyKad.
 */
export class MalaysiaMyKadBackRecognizer extends Recognizer {
    constructor() {
        super('MalaysiaMyKadBackRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if old NRIC should be extracted from back side of the MyKad
         * 
         *  
         */
        this.extractOldNric = true;
        
        /** 
         * Property for setting DPI for full document images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         *  
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * Image extension factors for full document image.
         * 
         * @see ImageExtensionFactors
         *  
         */
        this.fullDocumentImageExtensionFactors = new ImageExtensionFactors();
        
        /** 
         * Sets whether full document image of ID card should be extracted.
         * 
         *  
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new MalaysiaMyKadBackRecognizerResult(nativeResult); }
    }
}