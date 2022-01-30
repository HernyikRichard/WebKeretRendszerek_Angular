export interface MedicationStatement {
    resourceType?: string,
    id?: string,
    text?: TypeOfText,
    contained?: TypeOfContained[],
    identifier?: Identifier[],
    basedOn?: Reference[],
    partOf?: Reference[],
    status :"active" | "completed" | "entered-in-error" | "intended" | "stopped" | "on-hold" | "unknown" | "not-taken",
    statusReason?: CodeableConcept[],
    category?: CodeableConcept,
    medicationCodeableConcept?: CodeableConcept,
    medicationReference?: Reference
    subject?: Reference,
    context?: Reference,
    effectiveDateTime?: string,
    effectivePeriod?: Period
    dateAsserted?: string,
    informationSource?: Reference,
    derivedFrom?: Reference[],
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference[],
    note?: Annotation[],
    dosage?: Dosage[]
}
export interface TypeOfContained {
    resourceType?: string,
    id?: string,
    code?: TypeOfCodes,
    form?: TypeOfCodes,
    ingredient?: TypeOfIngredient[],
    batch?: TypeOfBatch
}
export interface TypeOfIngredient {
    itemCodeableConcept?: TypeOfCodes,
    strength?: TypeOfStrength,
}
export interface TypeOfStrength {
    numerator?: TypeOfNumerator,
    denominator?: TypeOfNumerator
}
export interface TypeOfNumerator {
    value?: number,
    system?: string,
    code?: string
}
export interface TypeOfBatch {
    lotNumber?: string,
    expirationDate?: string
}
export interface TypeOfCodes {
    coding?: TypeOfCoding[]
}
export interface TypeOfCoding {
    system: string,
    code: string,
    display: string
}
export interface TypeOfText {
    status?: string,
    div?: string,
}
export interface Identifier {
    use?: string,
    type?: CodeableConcept,
    system?: string,
    value?: string,
    period?: Period
    assigner?: Reference
}
export interface CodeableConcept {
    coding?: Coding[],
    text?: string
}
export interface Coding {
    system?: string,
    version?: string,
    code?: string,
    display?: string,
    userSelected?: boolean
}
export interface Period {
    start?: string,
    end?: string
}
export interface Reference {
    reference?: string,
    type?: string,
    identifier?: Identifier,
    display?: string
}
export interface Annotation {
    authorReference?: Reference,
    authorString?: string,
    time?: string,
    text: string
}
export interface Dosage {
    sequence?: number,
    text?: string,
    additionalInstruction?: CodeableConcept[],
    patientInstruction?: string,
    timing?: Timing,
    asNeededBoolean?: boolean,
    asNeededCodeableConcept?: CodeableConcept,
    site?: CodeableConcept,
    route?: CodeableConcept,
    method?: CodeableConcept,
    doseAndRate?: DoseAndRateElement[]
    maxDosePerPeriod?: Ratio,
    maxDosePerAdministration?: SimpleQuantity
    maxDosePerLifetime?: SimpleQuantity
}
export interface DoseAndRateElement {
    type?: CodeableConcept,
    doseRange?: TypeOfRange,
    doseQuantity?: SimpleQuantity,
    rateRatio?: Ratio,
    rateRange?: Range,
    rateQuantity?: SimpleQuantity,
}
export interface Timing {
    event?: string[],
    repeat?: TypeOfElement,
    code?: CodeableConcept
}
export interface TypeOfElement {
    id?: string,
    extension?: Extension[]
    boundsDuration?: Duration,
    boundsRange?: Range,
    boundsPeriod?: Period,
    count?: number,
    countMax?: number,
    duration?: number,
    durationMax?: number,
    durationUnit?: string,
    frequency?: number,
    frequencyMax?: number,
    period?: number,
    periodMax?: number,
    periodUnit?: string,
    dayOfWeek?: string[],
    timeOfDay?: string[],
    when?: string[],
    offset?: number,
}
export interface Extension {
    url: string,
    value?: any
}
export interface Duration {
    value?: number,
    currency?: string,
}
export interface TypeOfRange {
    low?: SimpleQuantity,
    high?: SimpleQuantity
}
export interface SimpleQuantity {
    value?: number,
    unit?: string,
    system?: string,
    code?: string,
    currency?: string
}
export interface Ratio {
    numerator?: Quantity
    denominator?: Quantity
}
export interface Quantity {
    value?: number,
    comparator?: "<" | "<=" | ">=" | ">",
    unit?: string,
    system?: string,
    code?: string
}