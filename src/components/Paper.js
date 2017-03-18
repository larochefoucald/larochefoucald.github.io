import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class Paper extends Component {
	render() {
		const { title, subtitle, subtitle2, content, image, uri } = this.props;
		let uriText = this.props.uriText || this.props.uri;
		return (
			<Card className="Main">
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Subtitle>{subtitle}</Card.Subtitle>
					<Card.Subtitle className="pt-3">{subtitle2}</Card.Subtitle>
					<Card.Text className="pt-3">
						<b>Abstract</b><br/>
						<i>{content}</i>
					</Card.Text>
					<Card.Img variant="bottom" src={image} />
					<Card.Link className="float-right" href={uri}>
						{uriText}
					</Card.Link>
				</Card.Body>
			</Card>
			);
	}
}
export default Paper;

var paperMeta = [
	{
		title:"Results of the 3D Virtual Comparison Microscopy Error Rate (VCMER) Study for firearm forensics",
		subtitle:"Chad Chapnick BScEE, Todd J. Weller MS, Pierre Duez MASc, Eric Meschke MScCS, John Marshall BS, MBA, Ryan Lilien MD, PhD",
		subtitle2:"First published: Journal of Forensic Sciences, 26 October 2020",
		content: <>
		<b>Abstract</b><br/>
		<i>The digital examination of scanned or measured 3D surface topography is referred to as 
		Virtual Comparison Microscopy (VCM). Within the discipline of firearm and toolmark 
		examination, VCM enables review and comparison of microscopic toolmarks on fired 
		ammunition components. In the coming years, this technique may supplement and 
		potentially replace the light comparison microscope as the primary instrument used 
		for firearm and toolmark examination. This paper describes a VCM error rate and 
		validation study involving 107 participants. The study included 40 test sets of 
		fired cartridge cases from firearms with a variety of makes, models, and calibers. 
		Participants used commercially available VCM software which allowed digital data 
		distribution, specimen visualization, and submission of conclusions. 
		The software also allowed participants to annotate areas of similarity and 
		dissimilarity to support their conclusions. The primary cohort of 76 qualified 
		United States and Canadian examiners that completed the study had an overall 
		false-positive error rate of 3 errors from 693 comparisons (0.43%) and a false-negative 
		error rate of 0 errors from 491 comparisons (0.0%). This accuracy is supplemented by the participant's 
		provided surface annotations which provide insight into the cause of errors and the overall 
		consistency across the independent examinations conducted in the study. The ability to 
		obtain highly accurate conclusions on test fires from a wide range of firearms supports 
		the hypothesis that VCM is a useful tool within the crime laboratory.</i>
	</>,
		image:"img/VCMERSsnip.png",
		uri:"https://doi.org/10.1111/1556-4029.14602",
	},
	{ 
		title: "Automatic Supplemental Oxygen Control System With Weaning Capabilities",
		subtitle: "United States Patent Application 20190321574<br/> Sallee; Christopher;   et al.  October 24, 2019",
		content: <>
		<b>Abstract</b><br/>
		<i>Disclosed herein is a device and method for delivery of supplemental 
		oxygen in a healthcare environment such that flow rate of delivered oxygen 
		is dependent on input data of patient oxygen saturation values and other 
		physiologic variables. The output of oxygen is modulated by an algorithm 
		which may be pre-set or altered by the user in which variables such as 
		desired range of oxygen saturation, oxygen flow rate of change, 
		time response and alarm settings may be altered. User interaction 
		may be accomplished via interface on the device itself comprising of a 
		touchscreen, buttons or dial system or via interaction with a second 
		device such as a patient vitals monitor or computer, which may interact 
		with the device by direct connection or network connection. 
		The device may be used to maintain a state of adequate oxygenation in 
		the patient by increasing or decreasing oxygen flow, or to facilitate 
		weaning and cessation of oxygen use.</i>
	</>,
		image: "img/US20190321574A1-20191024-D00000.png",
		uri: "https://uspto.report/patent/app/20190321574",
		uriText: "USPTO Report"
	},
	{
		title: "Digital Morphometrics of Two North American Grapevines (Vitis: Vitaceae) Quantifies Leaf Variation between Species, within Species, and among Individuals",
		subtitle: "Laura L. Klein, Madeleine Caito, Chad Chapnick, Cassandra Kitchen, Regan O’Hanlon, Dan H. Chitwood and Allison J. Miller",
		subtitle2: "First Published Frontiers Plant Science, 17 March 2017",
		content: <>
		<b>Abstract</b><br/>
		<i>Recent studies have demonstrated that grapevine (Vitis spp.) leaf shape can be 
		quantified using digital approaches which indicate phylogenetic signal in leaf shape, 
		discernible patterns of developmental context within single leaves, and signatures of 
		local environmental conditions. Here, we extend this work by quantifying intra-individual, 
		intraspecific, and interspecific variation in leaf morphology in accessions of 
		North American Vitis riparia and V. rupestris in a common environment. 
		For each species at least four clonal replicates of multiple genotypes were grown in the 
		Missouri Botanical Garden Kemper Center for Home Gardening. All leaves from a single 
		shoot were harvested and scanned leaf images were used to conduct generalized Procrustes 
		analysis, linear discriminant analysis, and elliptical Fourier analysis. 
		Leaf shapes displayed genotype-specific signatures and species distinctions consistent 
		with taxonomic classifications. Leaf shape variation within genotypes and among clones 
		was the result of pest and pathogen-induced leaf damage that alters leaf morphology. 
		Significant trends in leaf damage caused by disease and infestation were non-random with 
		respect to leaf position on the shoot. Digital morphometrics is a powerful tool for 
		assessing leaf shape variation among species, genotypes, and clones under common conditions 
		and suggests biotic factors such as pests and pathogens as important drivers influencing leaf shape.</i>
	</>,
		image: "img/digitalmorphometrics.jpeg",
		uri: "https://doi.org/10.3389/fpls.2017.00373"
	}
]

export const papers = paperMeta.map(({ 
  title, subtitle, subtitle2, content, image, uri, uriText 
}, index) => (
	<Paper
    key={index}
    title={title}
    subtitle={subtitle2}
    subtitle2={subtitle}
    content={content}
    image={image}
    uri={uri}
    uriText={uriText}
  />
));
