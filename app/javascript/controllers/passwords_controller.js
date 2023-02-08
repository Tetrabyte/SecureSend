import { Controller } from "@hotwired/stimulus"
import { spoilerAlert } from "spoiler-alert"

export default class extends Controller {
    static targets = [
        "payloadInput",
        "currentChars",
        "maximumChars",
    ]

    static values = {
    }

    connect() {
        spoilerAlert('spoiler, .spoiler', {max: 0, partial: 0});
    }
    document.addEventListener("DOMContentLoaded", ready);

    updateCharacterCount(event) {
        let characterCount = this.payloadInputTarget.value.length;
        this.currentCharsTarget.textContent = characterCount;

        if (characterCount >= 1048576) {
            this.maximumCharsTarget.style.color = '#F91A00'
            this.currentCharsTarget.style.color = '#F91A00'
        }
    }
}