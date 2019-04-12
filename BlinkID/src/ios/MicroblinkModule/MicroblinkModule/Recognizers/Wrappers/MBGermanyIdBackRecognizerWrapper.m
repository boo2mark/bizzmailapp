#import "MBGermanyIdBackRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBGermanyIdBackRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"GermanyIdBackRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBGermanyIdBackRecognizer *recognizer = [[MBGermanyIdBackRecognizer alloc] init];
    {
        id detectGlare = [jsonRecognizer valueForKey:@"detectGlare"];
        if (detectGlare != nil) {
            recognizer.detectGlare = [(NSNumber *)detectGlare boolValue];
        }
    }
    {
        id extractAddress = [jsonRecognizer valueForKey:@"extractAddress"];
        if (extractAddress != nil) {
            recognizer.extractAddress = [(NSNumber *)extractAddress boolValue];
        }
    }
    {
        id extractAuthority = [jsonRecognizer valueForKey:@"extractAuthority"];
        if (extractAuthority != nil) {
            recognizer.extractAuthority = [(NSNumber *)extractAuthority boolValue];
        }
    }
    {
        id extractColourOfEyes = [jsonRecognizer valueForKey:@"extractColourOfEyes"];
        if (extractColourOfEyes != nil) {
            recognizer.extractColourOfEyes = [(NSNumber *)extractColourOfEyes boolValue];
        }
    }
    {
        id extractDateOfIssue = [jsonRecognizer valueForKey:@"extractDateOfIssue"];
        if (extractDateOfIssue != nil) {
            recognizer.extractDateOfIssue = [(NSNumber *)extractDateOfIssue boolValue];
        }
    }
    {
        id extractHeight = [jsonRecognizer valueForKey:@"extractHeight"];
        if (extractHeight != nil) {
            recognizer.extractHeight = [(NSNumber *)extractHeight boolValue];
        }
    }
    {
        id fullDocumentImageDpi = [jsonRecognizer valueForKey:@"fullDocumentImageDpi"];
        if (fullDocumentImageDpi != nil) {
            recognizer.fullDocumentImageDpi = [(NSNumber *)fullDocumentImageDpi unsignedIntegerValue];
        }
    }
    {
        id fullDocumentImageExtensionFactors = [jsonRecognizer valueForKey:@"fullDocumentImageExtensionFactors"];
        if (fullDocumentImageExtensionFactors != nil) {
            recognizer.fullDocumentImageExtensionFactors = [MBBlinkIDSerializationUtils deserializeMBImageExtensionFactors:(NSDictionary*)fullDocumentImageExtensionFactors];
        }
    }
    {
        id returnFullDocumentImage = [jsonRecognizer valueForKey:@"returnFullDocumentImage"];
        if (returnFullDocumentImage != nil) {
            recognizer.returnFullDocumentImage = [(NSNumber *)returnFullDocumentImage boolValue];
        }
    }

    return recognizer;
}

@end

@interface MBGermanyIdBackRecognizer (JsonSerialization)
@end

@implementation MBGermanyIdBackRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:self.result.addressCity forKey:@"addressCity"];
    [jsonResult setValue:self.result.addressHouseNumber forKey:@"addressHouseNumber"];
    [jsonResult setValue:self.result.addressStreet forKey:@"addressStreet"];
    [jsonResult setValue:self.result.addressZipCode forKey:@"addressZipCode"];
    [jsonResult setValue:self.result.authority forKey:@"authority"];
    [jsonResult setValue:self.result.colourOfEyes forKey:@"colourOfEyes"];
    [jsonResult setValue:[MBSerializationUtils serializeMBDateResult:self.result.dateOfIssue] forKey:@"dateOfIssue"];
    [jsonResult setValue:self.result.fullAddress forKey:@"fullAddress"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];
    [jsonResult setValue:self.result.height forKey:@"height"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMrzResult:self.result.mrzResult] forKey:@"mrzResult"];

    return jsonResult;
}

@end