import React from 'react';

import NavBar from './NavBar';
import './styles/AboutMe.css';

import aboutMePic from './images/about-me-main.jpg';
import aboutMePeace from './images/aboutMe-main-peace.jpg';

export default class AboutPage extends React.Component {
    render() {
        return(
            <div>
                <NavBar />
                <h1 className="aboutMe-title">About Me</h1>
                <div className="aboutMe-container">
                    <div className="aboutMe-item">
                        <img src={aboutMePeace} alt="aboutMePicture" className="aboutMe-image"/>
                    </div>
                    <div className="aboutMe-descr aboutMe-item">
                        Blessed midwifery co-create nonprofit Phish, marijuana kefir heart-opening. The power of intention stable energy fields quantum healing soulmate mystic colloidal silver peacock feather sarong, ceremonial-grade astral plane nectar. Innate capacity cleansing contact improv sound healing, essential oils feeling triggered integral radiant. Somatic kombucha fractal nature of coconut water, prayerformance channeling non-attachment. Projecting aho spoken word community Esalen, tofu carob white sage superfood harmony lentils. Manifestation doula enlightenment, clarity planetary transition mercury retrograde. Hacky sack combined energy fields closing circle prayer flags, retreat nonviolent communication.Spirit animal what the planet really needs peacock feather soothing vibrations Whole Earth Catalog, kelp dolphin communal gaia the earth mother dharma. Holographic resonance mushrooms psychic reiki master, hooping prayerformance macrobiotic. Fasting vitamin one taste yoni, seaweed tempeh higher cosmic force medical marijuana soulmate divine feminine. Mercury retrograde deep five rhythms, lavender spiral. Spiritual guru kombucha moon cycle reconnect somatic, discovering valuable truths aura beekeeping.
                        Blessed midwifery co-create nonprofit Phish, marijuana kefir heart-opening. The power of intention stable energy fields quantum healing soulmate mystic colloidal silver peacock feather sarong, ceremonial-grade astral plane nectar. Innate capacity cleansing contact improv sound healing, essential oils feeling triggered integral radiant. Somatic kombucha fractal nature of coconut water, prayerformance channeling non-attachment. Projecting aho spoken word community Esalen, tofu carob white sage superfood harmony lentils. Manifestation doula enlightenment, clarity planetary transition mercury retrograde. Hacky sack combined energy fields closing circle prayer flags, retreat nonviolent communication.Spirit animal what the planet really needs peacock feather soothing vibrations Whole Earth Catalog, kelp dolphin communal gaia the earth mother dharma. Holographic resonance mushrooms psychic reiki master, hooping prayerformance macrobiotic. Fasting vitamin one taste yoni, seaweed tempeh higher cosmic force medical marijuana soulmate divine feminine. Mercury retrograde deep five rhythms, lavender spiral. Spiritual guru kombucha moon cycle reconnect somatic, discovering valuable truths aura beekeeping.
                    </div>
                </div>
            </div>
        );
    }
}