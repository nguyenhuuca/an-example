/**
	<dependency>
		<groupId>io.springfox</groupId>
		<artifactId>springfox-swagger2</artifactId>
		<version>2.2.2</version>
	</dependency>
	<dependency>
		<groupId>io.springfox</groupId>
		<artifactId>springfox-swagger-ui</artifactId>
		<version>2.2.2</version>
	</dependency>
**/

@Configure
@EnableWebMvc
@EnableSwagger2
public  class api-document extends WebMvcAutoConfigureAdapter {
	@Bean
	public Docket managementDocket(){
		return new Docket(DocumentType.SWAGGER_2).groupName("my-project").apiInfo(apiInfo()).select.paths(regex("/.*")).build();
	}

	private ApiInfo apiInfo(){
		return new ApiInfoBuilder().title("My-project").description("Documet for API").termsOfServiceUrl("abc.xyz").contact("Canh").license("Proprietary").licenseUrl("abc.xyz").version("1.0").build();
	}

}

